import * as React from 'react';
import { ContextProvider } from './ContextProvider';
export declare type ContextFactoryProps<T = {}> = {
    initContextValue: T;
    context?: React.Context<T>;
    loggingEnabled?: boolean;
};
export declare class ContextFactory extends React.Component<ContextFactoryProps> {
    static instance: ContextFactory;
    Context: React.Context<{}>;
    provider: ContextProvider;
    constructor(props: ContextFactoryProps);
    render(): JSX.Element;
}
