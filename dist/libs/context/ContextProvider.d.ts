import * as React from 'react';
import { WithContextProps, ListenContextCallback } from './Types';
interface ContextProviderProps<T> {
    initContextValue: T;
    contextType: React.Context<T>;
}
declare type ContextProviderState<C> = C & Required<WithContextProps>;
export declare class ContextProvider<C> extends React.Component<ContextProviderProps<C>, ContextProviderState<C>> {
    private readonly setContextProxy;
    private readonly getContext;
    constructor(props: ContextProviderProps<C>);
    readonly listenContext: (callback: ListenContextCallback) => void;
    render(): JSX.Element;
}
export {};
