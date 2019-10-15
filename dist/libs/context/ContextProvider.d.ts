import * as React from 'react';
import { WithContextProps, ListenContextCallback } from './Types';
interface ContextProviderProps {
    loggingEnabled?: boolean;
    initContextValue: {};
}
declare type ContextProviderState = Required<WithContextProps>;
export declare class ContextProvider extends React.Component<ContextProviderProps, ContextProviderState> {
    setContextProxy: (source: any, newContext: any) => void;
    getContext: (...contextKeys: any[]) => any;
    log: (source: any, newContext: any, oldContext: any) => void;
    constructor(props: ContextProviderProps);
    listenContext: (callback: ListenContextCallback) => void;
    render(): JSX.Element;
}
export {};
