import * as React from 'react';

import { ContextProvider } from './ContextProvider';
import { WithContextProps } from './Types';

export type ContextFactoryProps<T> = {
    initContextValue?: T;
    contextType: React.Context<T>;
    children?: React.ReactNode | React.Component<WithContextProps<T>>;
};

export function ContextFactory<C = {}>(props: ContextFactoryProps<C>) {
    const {
        children,
        contextType,
        initContextValue
    } = props;

    const defaultContextValue = React.useContext(contextType);

    return (
        <ContextProvider
            contextType={contextType}
            initContextValue={initContextValue || defaultContextValue}
        >
            {children}
        </ContextProvider>
    );
}