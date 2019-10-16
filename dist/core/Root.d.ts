import * as React from 'react';
import { ServiceWorkerRegistrationProps } from '../app';
import { AppCoreContext } from '../Types';
export interface RootProps<Context extends AppCoreContext = AppCoreContext> {
    readonly renderApp: () => React.ReactNode;
    readonly initialContext: Partial<Context>;
    readonly SWRegistrationProps?: ServiceWorkerRegistrationProps;
}
export declare class Root extends React.Component<RootProps> {
    static readonly contextType: React.Context<{}>;
    static readonly render: (rootElement: HTMLElement, rootProps: RootProps<AppCoreContext<{}>>) => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
