import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    ServiceWorkerRegistrationProps,
    swRegistration,
    Middleware,
    runMiddlewares,
    rootContextType
} from '../app';

import { ContextFactory } from '../libs';
import { AppCoreContext, SideContext } from '../Types';

import { HistoryMiddleware } from './HistoryMiddleware';

export interface RootProps<Context extends AppCoreContext = AppCoreContext> {
    readonly renderApp: (appContext: Context) => React.ReactNode;
    readonly initialContext: Context;
    readonly bootstrappers?: Middleware<Context>[];
    readonly sideContexts?: SideContext[];
    readonly SWRegistrationProps?: ServiceWorkerRegistrationProps;
}

export class Root extends React.Component<RootProps> {

    public static defaultProps = {
        sideContexts: [],
        bootstrappers: []
    };

    public static readonly render = async (rootElement: HTMLElement, rootProps: RootProps) => {
        const bootstrappedContext = await runMiddlewares(
            rootProps.initialContext,
            rootProps.bootstrappers!
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
        const { renderApp, initialContext, sideContexts } = this.props;

        return [
            (
                <ContextFactory
                    key={rootContextType.displayName}
                    contextType={rootContextType}
                    initContextValue={initialContext}
                >
                    <HistoryMiddleware>
                        {renderApp(initialContext)}
                    </HistoryMiddleware>
                </ContextFactory>
            ),
            sideContexts!.map((sideContext) => {
                const { contextType, mount, name, event } = sideContext;
                
                contextType.displayName = name;

                return (
                    <ContextFactory
                        key={contextType.displayName}
                        contextType={contextType}
                        event={event}
                    >
                        {mount}
                    </ContextFactory>
                );
            })
        ];
    }
}