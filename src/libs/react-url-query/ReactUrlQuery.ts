import * as React from 'react';

import { UnregisterCallback } from 'history';
import { parseQuery, buildQuery } from 'urijs';
import difference from 'lodash/difference';

import { history } from '../../app';

export class ReactUrlQuery<S, K extends keyof S> {

    private readonly pageInsance: React.Component<{}, S>;
    private readonly originSetState: React.Component<{}, S>['setState'];

    private readonly registeredStateKeys: K[] = [];
    private _unListener: UnregisterCallback;
    private _unmounting = false;

    private readonly getCurrentValue = (key: K, values?: Pick<S, K>): any => {
        const queryObject = values || (parseQuery(window.location.search) as { [name in keyof S]: any });

        const defaulValue = this.defaultValues[key];
        const defaultValueType = typeof defaulValue;

        const currentParamValue = queryObject[key];

        if (typeof currentParamValue === defaultValueType) {
            return currentParamValue;
        }

        if (currentParamValue === undefined) {
            return defaulValue;
        }

        if (Array.isArray(defaulValue)) {
            if (Array.isArray(currentParamValue)) {
                return currentParamValue;
            }

            const nextValue = [currentParamValue];
            if (!this.pageInsance.state) {
                return nextValue;
            }

            const currentStateValue = this.pageInsance.state[key] as any;

            const diffValues = difference(nextValue, currentStateValue);

            if (diffValues.length > 0) {
                return nextValue;
            }

            return currentStateValue;
        }

        switch (defaultValueType) {
            case 'boolean':
                return currentParamValue === 'true';
            case 'number':
                return +currentParamValue;
            default:
                return currentParamValue;
        }
    }

    private readonly locationStateFromObj = (obj: Pick<S, K> | S) => {
        const originObj = this.registeredStateKeys.reduce(
            (prevResult, currentItem) => {
                if (obj[currentItem] === null || obj[currentItem] === undefined) {
                    prevResult[currentItem] = undefined!;
                } else {
                    prevResult[currentItem] = obj[currentItem];
                }
                return prevResult;
            },
            {} as Pick<S, K> | S
        );

        for (const key in originObj as {}) {
            if (Object(originObj).hasOwnProperty(key)) {
                const isEmptyArray = Array.isArray(originObj[key]) && !originObj[key].length;

                if (isEmptyArray) {
                    delete originObj[key];
                }

                if (originObj[key] === undefined) {
                    delete originObj[key];
                } else {
                    originObj[key] = this.getCurrentValue(key as K, obj);
                }

            }
        }

        return originObj;
    }

    private readonly listen = (callback: (newValue: Pick<S, K> | S) => void) => {
        return history.listen(() => {
            if (this._unmounting) {
                return;
            }

            const queryObject = parseQuery(window.location.search) as Pick<S, K> | S;

            const nextLocationState = this.locationStateFromObj(queryObject);

            const currentLocationState = this.locationStateFromObj(this.pageInsance.state);

            const isLocationStateChanged = JSON.stringify(nextLocationState) !== JSON.stringify(currentLocationState);

            if (!isLocationStateChanged) {
                return;
            }

            for (const key in Object(nextLocationState)) {
                if (Object(nextLocationState).hasOwnProperty(key)) {
                    if (this.defaultValues[key]) {
                        nextLocationState[key] = this.getCurrentValue(key as K, nextLocationState);
                    }
                }
            }

            const nextState = {
                ...this.defaultValues,
                ...nextLocationState
            };

            let needsUpdate = false;

            for (const key in Object(nextState)) {
                if (Object(nextState).hasOwnProperty(key)) {
                    needsUpdate = nextState[key] !== this.pageInsance.state[key];
                    if (needsUpdate) {
                        break;
                    }
                }
            }

            if (!needsUpdate) {
                return;
            }

            callback(nextState);
        });
    }

    private readonly set: React.Component<{}, S>['setState'] = (statePart, callback?) => {
        if (!statePart) {
            return;
        }

        for (const key in statePart as object) {
            if (Object(statePart).hasOwnProperty(key)) {
                if (statePart[key] === undefined && this.defaultValues[key]) {
                    delete statePart[key];
                }
            }
        }

        this.originSetState(
            {
                ...this.pageInsance.state,
                ...statePart
            },
            () => {
                const currentSearch = new URLSearchParams(location.search);

                for (const registeredStateKey of this.registeredStateKeys) {
                    currentSearch.delete(registeredStateKey as string);
                }

                const currentSearchObj = parseQuery(currentSearch.toString());

                const nextLocationState = this.locationStateFromObj({
                    ...this.pageInsance.state,
                    ...statePart
                });

                const nextQuery = buildQuery(
                    {
                        ...currentSearchObj,
                        ...nextLocationState as object
                    },
                    true
                );

                const nextSearch = nextQuery ? `?${nextQuery}` : '';

                const needsUpdateUrl = (location.search !== nextSearch);

                if (needsUpdateUrl) {
                    history.replace(location.pathname + nextSearch);
                }

                if (!callback) {
                    return;
                }

                callback();
            }
        );
    }

    constructor(pageInstance: React.Component<{}, S>) {
        this.pageInsance = pageInstance;

        this.originSetState = pageInstance.setState.bind(pageInstance);
        this.pageInsance.setState = this.set;

        const originComponentWillUnmount = this.pageInsance.componentWillUnmount
            ? this.pageInsance.componentWillUnmount.bind(pageInstance)
            : undefined;

        this.pageInsance.componentWillUnmount = () => {
            this._unmounting = true;

            if (this._unListener) {
                this._unListener();
            }

            if (originComponentWillUnmount) {
                originComponentWillUnmount();
            }
        };
    }

    public readonly defaultValues = {} as S;

    public readonly getFromUrl = (key: K) => {
        if (!this.pageInsance.state) {
            const queryObject = parseQuery(window.location.search) as Pick<S, K>;
            return queryObject[key];
        }

        return this.getCurrentValue(key);
    }

    public readonly syncWithUrl = <T extends S[K]>(key: K, defaulValue?: T): T => {
        this.registeredStateKeys.push(key);

        this.defaultValues[key] = defaulValue as T;

        if (!this._unListener) {
            this._unListener = this.listen((nextLocationState) => {
                this.pageInsance.setState(nextLocationState);
            });
        }

        return this.getCurrentValue(key);
    }

    public get current() {
        return this.registeredStateKeys.reduce(
            (result, currentKey) => {
                result[currentKey] = this.pageInsance.state[currentKey];
                return result;
            },
            {} as Pick<S, K>
        );
    }
}