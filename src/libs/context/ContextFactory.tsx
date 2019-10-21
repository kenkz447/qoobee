import * as React from 'react';

import { ContextProvider } from './ContextProvider';
import { WithContextProps } from './Types';
import { Event } from '../../app';

export interface ContextFactoryProps<C> {
    readonly initContextValue?: C;
    readonly contextType: React.Context<C>;
    readonly children?: React.ReactNode | React.Component<WithContextProps<C>>;
    readonly event?: Event<C>;
}

export function ContextFactory<C = {}>(props: ContextFactoryProps<C>) {
    const {
        children,
        contextType,
        initContextValue,
        event
    } = props;

    const defaultContextValue = React.useContext(contextType);

    return (
        <ContextProvider
            contextType={contextType}
            initContextValue={initContextValue || defaultContextValue}
            event={event}
        >
            {children}
        </ContextProvider>
    );
}