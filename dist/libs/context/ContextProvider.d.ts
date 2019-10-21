import * as React from 'react';
import { WithContextProps } from './Types';
interface ContextProviderProps<C> {
    initContextValue: C;
    contextType: React.Context<C>;
    children: React.ReactNode | React.ComponentType<WithContextProps<C>>;
}
declare type ContextProviderState<C> = Required<WithContextProps<C>>;
export declare class ContextProvider<C> extends React.Component<ContextProviderProps<C>, ContextProviderState<C>> {
    private readonly setContextProxy;
    private readonly getContext;
    constructor(props: ContextProviderProps<C>);
    render(): JSX.Element;
}
export {};
