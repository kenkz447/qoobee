import * as React from 'react';
import { ServiceWorkerRegistrationProps } from './swRegistration';
import { AppCoreContext } from './Types';
export interface RootProps<Context extends AppCoreContext = AppCoreContext> {
    readonly AppContent: React.ComponentType;
    readonly initialContext: Partial<Context>;
    readonly SWRegistrationProps: ServiceWorkerRegistrationProps;
}
export declare const RootContext: React.Context<{}>;
export declare class Root extends React.Component<RootProps> {
    componentDidMount(): void;
    render(): JSX.Element;
}
