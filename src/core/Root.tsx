import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    ServiceWorkerRegistrationProps,
    swRegistration
} from '../app';

import { HistoryMiddleware } from '../containers';
import { ContextFactory } from '../libs';
import { AppCoreContext } from '../Types';

export interface RootProps<Context extends AppCoreContext = AppCoreContext> {
    readonly renderApp: () => React.ReactNode;
    readonly initialContext: Partial<Context>;
    readonly SWRegistrationProps?: ServiceWorkerRegistrationProps;
}

export class Root extends React.Component<RootProps> {

    public static readonly contextType = React.createContext({});

    public static readonly render = (rootElement: HTMLElement, rootProps: RootProps) => {
        ReactDOM.render(<Root {...rootProps} />, rootElement);
    }

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
                context={Root.contextType}
                initContextValue={initialContext}
            >
                <HistoryMiddleware>
                    {renderApp()}
                </HistoryMiddleware>
            </ContextFactory>
        );
    }
}