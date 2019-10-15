import * as React from 'react';

import {
    AppCoreContext,
    ServiceWorkerRegistrationProps,
    swRegistration,
    RootContext
} from '../app';
import HistoryMiddleware from './HistoryMiddleware';
import { ContextFactory } from '../libs';

export interface RootProps<Context extends AppCoreContext = AppCoreContext> {
    readonly renderApp: () => React.ReactNode;
    readonly initialContext: Partial<Context>;
    readonly SWRegistrationProps?: ServiceWorkerRegistrationProps;
}

export class Root extends React.Component<RootProps> {
    public componentDidMount() {
        const { SWRegistrationProps } = this.props;
        if (!SWRegistrationProps) {
            return;
        }

        swRegistration(SWRegistrationProps);
    }

    public render() {
        const { renderApp, initialContext } = this.props;

        return (
            <ContextFactory
                context={RootContext}
                initContextValue={initialContext}
            >
                <HistoryMiddleware>
                    {renderApp()}
                </HistoryMiddleware>
            </ContextFactory>
        );
    }
}