import * as React from 'react';
export declare class ReactUrlQuery<S, K extends keyof S> {
    private readonly pageInsance;
    private readonly originSetState;
    private readonly registeredStateKeys;
    private _locationBagUnListener;
    private readonly locationStateFromObj;
    private readonly listen;
    constructor(pageInstance: React.Component<{}, S>);
    readonly sync: (key: K, defaulValue?: string | undefined) => string | S[K] | undefined;
    readonly get: (key: K) => Pick<S, K>[K];
    private readonly set;
}
