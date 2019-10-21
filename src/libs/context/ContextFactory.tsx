import * as React from 'react';

import { ContextProvider } from './ContextProvider';

export type ContextFactoryProps<T> = {
    initContextValue: T;
    contextType: React.Context<T>;
};

export class ContextFactory<C = {}> extends React.Component<ContextFactoryProps<C>> {
    constructor(props: ContextFactoryProps<C>) {
        super(props);
    }

    render() {
        const {
            children,
            contextType,
            initContextValue
        } = this.props;

        return (
            <ContextProvider
                contextType={contextType}
                initContextValue={initContextValue}
            >
                {children}
            </ContextProvider>
        );
    }
}