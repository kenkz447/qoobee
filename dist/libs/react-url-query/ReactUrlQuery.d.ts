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
    private readonly set;
    constructor(pageInstance: React.Component<{}, S>);
    readonly getFromUrl: (key: K) => any;
    readonly syncWithUrl: <T extends S[K]>(key: K, defaulValue?: T | undefined) => T;
    readonly current: Pick<S, K>;
}
