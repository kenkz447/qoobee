import * as React from 'react';
import { ServiceWorkerRegistrationProps, Middleware } from '../app';
import { AppCoreContext } from '../Types';
export interface RootProps<Context extends AppCoreContext = AppCoreContext> {
    readonly renderApp: (appContext: Context) => React.ReactNode;
    readonly initialContext: Context;
    readonly bootstrappers: Middleware<Context>[];
    readonly SWRegistrationProps?: ServiceWorkerRegistrationProps;
}
export declare class Root extends React.Component<RootProps> {
    static readonly contextType: React.Context<AppCoreContext<{}>>;
    static readonly render: (rootElement: HTMLElement, rootProps: RootProps<AppCoreContext<{}>>) => Promise<JSX.Element>;
    componentDidMount(): void;
    render(): JSX.Element;
}
