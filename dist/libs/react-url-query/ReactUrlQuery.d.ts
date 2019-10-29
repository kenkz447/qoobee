import * as React from 'react';
export declare class ReactUrlQuery<S, K extends keyof S> {
    private readonly pageInsance;
    private readonly originSetState;
    private readonly defaultValues;
    private readonly registeredStateKeys;
    private _locationBagUnListener;
    private readonly getCurrentValue;
    private readonly locationStateFromObj;
    private readonly listen;
    constructor(pageInstance: React.Component<{}, S>);
    readonly sync: <T extends S[K]>(key: K, defaulValue?: T | undefined) => T;
    readonly get: (key: K) => any;
    private readonly set;
}
