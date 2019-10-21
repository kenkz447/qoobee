import * as React from 'react';
import { ContextProvider } from './ContextProvider';
export declare type ContextFactoryProps<T> = {
    initContextValue: T;
    contextType: React.Context<T>;
};
export declare class ContextFactory<C = {}> extends React.Component<ContextFactoryProps<C>> {
    Context: React.Context<C>;
    provider: ContextProvider<C>;
    constructor(props: ContextFactoryProps<C>);
    render(): JSX.Element;
}
