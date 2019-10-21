import * as React from 'react';
import { WithContextProps } from './Types';
import { Event } from '../../app';
interface ContextProviderProps<C> {
    initContextValue: C;
    contextType: React.Context<C>;
    children: React.ReactNode | React.ComponentType<WithContextProps<C>>;
    event?: Event<C>;
}
declare type ContextProviderState<C> = WithContextProps<C>;
export declare class ContextProvider<C> extends React.Component<ContextProviderProps<C>, ContextProviderState<C>> {
    private _unlistenEvent;
    private readonly setContextProxy;
    private readonly getContext;
    constructor(props: ContextProviderProps<C>);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
