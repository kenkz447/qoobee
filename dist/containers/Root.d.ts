import * as React from 'react';
import { AppCoreContext, ServiceWorkerRegistrationProps } from '../app';
export interface RootProps<Context extends AppCoreContext = AppCoreContext> {
    readonly renderApp: () => React.ReactNode;
    readonly initialContext: Partial<Context>;
    readonly SWRegistrationProps?: ServiceWorkerRegistrationProps;
}
export declare class Root extends React.Component<RootProps> {
    componentDidMount(): void;
    render(): JSX.Element;
}
