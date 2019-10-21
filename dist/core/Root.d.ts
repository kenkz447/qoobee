import * as React from 'react';
import { ServiceWorkerRegistrationProps, Middleware } from '../app';
import { AppCoreContext, SideContext } from '../Types';
export interface RootProps<Context extends AppCoreContext = AppCoreContext> {
    readonly renderApp: (appContext: Context) => React.ReactNode;
    readonly initialContext: Context;
    readonly bootstrappers?: Middleware<Context>[];
    readonly sideContexts?: SideContext[];
    readonly SWRegistrationProps?: ServiceWorkerRegistrationProps;
}
export declare class Root extends React.Component<RootProps> {
    static defaultProps: {
        sideContexts: never[];
        bootstrappers: never[];
    };
    static readonly render: (rootElement: HTMLElement, rootProps: RootProps<AppCoreContext<{}>>) => Promise<JSX.Element>;
    componentDidMount(): void;
    render(): (JSX.Element | JSX.Element[])[];
}
