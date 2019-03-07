import * as React from 'react';
import { ContextCreator } from 'react-context-service';

import {
    AppCoreContext,
    ServiceWorkerRegistrationProps,
    swRegistration
} from '../app';
import HistoryMiddleware from './HistoryMiddleware';

export interface RootProps<Context extends AppCoreContext = AppCoreContext> {
    readonly AppContent: () => React.ReactNode;
    readonly initialContext: Partial<Context>;
    readonly SWRegistrationProps?: ServiceWorkerRegistrationProps;
}

export const RootContext = React.createContext({});

export class Root extends React.Component<RootProps> {
    public componentDidMount() {
        const { SWRegistrationProps } = this.props;
        if (!SWRegistrationProps) {
            return;
        }

        swRegistration(SWRegistrationProps);
    }

    public render() {
        const { AppContent, initialContext } = this.props;

        return (
            <ContextCreator
                context={RootContext}
                initContextValue={initialContext}
            >
                <HistoryMiddleware>
                    {AppContent}
                </HistoryMiddleware>
            </ContextCreator>
        );
    }
}