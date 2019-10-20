import * as React from 'react';

import { UnregisterCallback } from 'history';
import { parseQuery, buildQuery } from 'urijs';

import { history } from '../../app';

export class ReactUrlQuery<S, K extends keyof S> {

    private readonly pageInsance: React.Component<{}, S>;
    private readonly originSetState: React.Component<{}, S>['setState'];

    private readonly registeredStateKeys: K[] = [];
    private _locationBagUnListener: UnregisterCallback;

    private readonly locationStateFromObj = (obj: Pick<S, K> | S) => {
        return this.registeredStateKeys.reduce(
            (prevResult, currentItem) => {
                prevResult[currentItem] = obj[currentItem] || undefined!;
                return prevResult;
            },
            {} as Pick<S, K> | S
        );
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

            callback(nextLocationState);
        });
    }

    constructor(pageInstance: React.Component<{}, S>) {
        this.pageInsance = pageInstance;

        this.originSetState = pageInstance.setState.bind(pageInstance);
        this.pageInsance.setState = this.set;
    }

    public readonly sync = (key: K, defaulValue?: string): undefined | string | S[K] => {
        this.registeredStateKeys.push(key);

        if (!this._locationBagUnListener) {
            this._locationBagUnListener = this.listen((nextLocationState) => {
                this.pageInsance.setState(nextLocationState);
            });
        }

        const queryObject = parseQuery(window.location.search) as Pick<S, K>;

        return queryObject[key] || defaulValue;
    }

    public readonly get = (key: K) => {
        if (!this.pageInsance.state) {
            const queryObject = parseQuery(window.location.search) as Pick<S, K>;
            return queryObject[key];
        }

        return this.pageInsance.state[key];
    }

    private readonly set: React.Component<{}, S>['setState'] = (statePart, callback?) => {
        this.originSetState(
            statePart,
            () => {
                const nextLocationState = this.locationStateFromObj({ ...this.pageInsance.state});
                const nextQuery = buildQuery(nextLocationState as object, true);
                const nextSearch = nextQuery ? `?${nextQuery}` : '';

                if (location.search === nextSearch) {
                    return;
                }

                history.push(nextSearch);
                
                if (callback) {
                    callback();
                }
            }
        );
    }
}