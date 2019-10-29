import * as React from 'react';

import { UnregisterCallback } from 'history';
import { parseQuery, buildQuery } from 'urijs';
import difference from 'lodash/difference';

import { history } from '../../app';

export class ReactUrlQuery<S, K extends keyof S> {

    private readonly pageInsance: React.Component<{}, S>;
    private readonly originSetState: React.Component<{}, S>['setState'];
    private readonly defaultValues = {} as S;

    private readonly registeredStateKeys: K[] = [];
    private _locationBagUnListener: UnregisterCallback;

    private readonly getCurrentValue = (key: K): any => {
        const queryObject = parseQuery(window.location.search) as { [name in keyof S]: any };
        const defaulValue = this.defaultValues[key];
        const defaulValueType = typeof defaulValue;

        const currentParamValue = queryObject[key];

        if (!currentParamValue) {
            return defaulValue;
        }

        if (typeof currentParamValue === defaulValueType) {
            return currentParamValue;
        }

        if (Array.isArray(defaulValue)) {
            if (Array.isArray(currentParamValue)) {
                return currentParamValue;
            }

            const nextValue = [currentParamValue];
            const currentStateValue = this.pageInsance.state[key] as any;

            const diffValues = difference(nextValue, currentStateValue);

            if (diffValues.length > 0) {
                return nextValue;
            }

            return currentStateValue;
        }

        switch (defaulValueType) {
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
                prevResult[currentItem] = obj[currentItem] || undefined!;
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
                }
            }
        }

        return originObj;
    }

    private readonly listen = (callback: (newValue: Pick<S, K> | S) => void) => {
        return history.listen(() => {

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
                        nextLocationState[key] = this.getCurrentValue(key as K);
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

    constructor(pageInstance: React.Component<{}, S>) {
        this.pageInsance = pageInstance;

        this.originSetState = pageInstance.setState.bind(pageInstance);
        this.pageInsance.setState = this.set;
    }

    public readonly sync = <T extends S[K]>(key: K, defaulValue?: T): T => {
        this.registeredStateKeys.push(key);

        this.defaultValues[key] = defaulValue as T;

        if (!this._locationBagUnListener) {
            this._locationBagUnListener = this.listen((nextLocationState) => {
                this.pageInsance.setState(nextLocationState);
            });
        }

        return this.getCurrentValue(key);
    }

    public readonly get = (key: K) => {
        if (!this.pageInsance.state) {
            const queryObject = parseQuery(window.location.search) as Pick<S, K>;
            return queryObject[key];
        }

        return this.getCurrentValue(key);
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

                const nextLocationState = this.locationStateFromObj({ ...this.pageInsance.state });

                const nextQuery = buildQuery(
                    {
                        ...currentSearchObj,
                        ...nextLocationState as object
                    },
                    true
                );

                const nextSearch = nextQuery ? `?${nextQuery}` : '';

                const needsUpdateUrl = (location.search !== nextSearch);

                if (!needsUpdateUrl) {
                    return;
                }

                history.push(nextSearch);

                if (!callback) {
                    return;
                }

                callback();
            }
        );
    }
}