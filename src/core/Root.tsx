import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    ServiceWorkerRegistrationProps,
    swRegistration,
    Middleware,
    runMiddlewares
} from '../app';

import { HistoryMiddleware } from '../containers';
import { ContextFactory } from '../libs';
import { AppCoreContext } from '../Types';

export interface RootProps<Context extends AppCoreContext = AppCoreContext> {
    readonly renderApp: (appContext: Context) => React.ReactNode;
    readonly initialContext: Context;
    readonly bootstrappers: Middleware<Context>[];
    readonly SWRegistrationProps?: ServiceWorkerRegistrationProps;
}

export class Root extends React.Component<RootProps> {

    public static readonly contextType = React.createContext({});

    public static readonly render = async (rootElement: HTMLElement, rootProps: RootProps) => {
        const bootstrappedContext = await runMiddlewares(
            rootProps.initialContext,
            rootProps.bootstrappers
        );

        const appElement = <Root {...rootProps} initialContext={bootstrappedContext} />;
        ReactDOM.render(appElement, rootElement);

        return appElement;
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
                    {renderApp(initialContext)}
                </HistoryMiddleware>
            </ContextFactory>
        );
    }
}