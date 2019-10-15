import * as React from 'react';

import { ContextProvider } from './ContextProvider';

export type ContextFactoryProps<T = {}> = {
    initContextValue: T;
    context?: React.Context<T>
    loggingEnabled?: boolean;
};

export class ContextFactory extends React.Component<ContextFactoryProps> {
    static instance: ContextFactory;
    Context: React.Context<{}>;
    provider!: ContextProvider;

    constructor(props: ContextFactoryProps) {
        super(props);
        const { context, initContextValue } = this.props;
        this.Context = context || React.createContext(initContextValue);
        ContextFactory.instance = this;
    }

    render() {
        const {
            loggingEnabled,
            children,
            initContextValue
        } = this.props;

        return (
            <ContextProvider
                ref={(e: ContextProvider) => this.provider = e}
                initContextValue={initContextValue}
                loggingEnabled={loggingEnabled}
            >
                {children}
            </ContextProvider>
        );
    }
}