declare module "Types" {
    import { History } from 'history';
    import { RouteProps } from 'react-router';
    export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
    export type Policy = (context: {}, funcKey?: string, values?: {}) => boolean;
    export type BreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    export interface MenuItem {
        readonly url: string;
        readonly icon?: string;
        readonly label: string;
    }
    export interface AppCoreContext<U = {}> {
        readonly currentUser: U;
        readonly currentUserRole: Role | null;
        readonly history: History;
        readonly policies?: {
            readonly [key: string]: Policy;
        };
        readonly currentBreakpoint: BreakPoint;
        readonly currentLanguage: string;
        readonly menus?: {
            readonly [key: string]: MenuItem[];
        };
    }
    export interface RouteInfo<P = {}, S = {}> extends RouteProps {
        readonly path: string;
        readonly title: string | ((props: P, state: S) => string);
        readonly icon?: JSX.Element;
        readonly policies?: string[] | Policy[];
        readonly isActive?: () => boolean;
    }
    export interface Menu<P = {}> {
        readonly isRoot?: boolean;
        readonly label?: JSX.Element | string;
        readonly href?: string;
        readonly children?: Menu[];
        readonly component: React.ComponentType<P>;
        readonly componentProps?: P;
    }
    export interface Permission {
        readonly key: string;
        readonly url?: RegExp;
    }
    export interface Role {
        readonly key: string;
        readonly defaultUrl?: string;
        readonly allowed: Permission[];
        readonly denied?: Permission[];
        readonly redirects?: Array<{
            readonly test: RegExp;
            readonly target: string;
        }>;
    }
}
declare module "app/events" {
    import EventEmitter from 'eventemitter3';
    export const ON_HISTORY_PUSH = "ON_HISTORY_PUSH";
    export const ON_HISTORY_REPLACE = "ON_HISTORY_REPLACE";
    export const events: EventEmitter<string | symbol>;
}
declare module "app/swRegistration" {
    export interface ServiceWorkerRegistrationProps {
        readonly workerUrl?: string;
        readonly workerOptions?: RegistrationOptions;
        readonly onUpdateFound: ServiceWorkerRegistration['onupdatefound'];
    }
    export const swRegistration: (props: ServiceWorkerRegistrationProps) => void;
}
declare module "app/index" {
    export * from "app/events";
    export * from "app/swRegistration";
}
declare module "libs/context/Types" {
    export type SetContext<T> = (context: Partial<T>) => void;
    export type GetContext<P> = (...key: Array<keyof P>) => Pick<P, keyof P>;
    export type ListenContextCallback = (...contextKeys: string[]) => void;
    export type WithContextProps<T = {}, OwnProps = {}> = T & OwnProps & {
        setContext: SetContext<T>;
        getContext: GetContext<T>;
        listenContext: (callback: ListenContextCallback) => void;
    };
}
declare module "libs/context/ContextProvider" {
    import * as React from 'react';
    import { WithContextProps, ListenContextCallback } from "libs/context/Types";
    interface ContextProviderProps {
        loggingEnabled?: boolean;
        initContextValue: {};
    }
    type ContextProviderState = Required<WithContextProps>;
    export class ContextProvider extends React.Component<ContextProviderProps, ContextProviderState> {
        setContextProxy: (source: any, newContext: any) => void;
        getContext: (...contextKeys: any[]) => any;
        log: (source: any, newContext: any, oldContext: any) => void;
        constructor(props: ContextProviderProps);
        listenContext: (callback: ListenContextCallback) => void;
        render(): JSX.Element;
    }
}
declare module "libs/context/ContextFactory" {
    import * as React from 'react';
    import { ContextProvider } from "libs/context/ContextProvider";
    export type ContextFactoryProps<T = {}> = {
        initContextValue: T;
        context: React.Context<T>;
        loggingEnabled?: boolean;
    };
    export class ContextFactory extends React.Component<ContextFactoryProps> {
        static instance: ContextFactory;
        Context: React.Context<{}>;
        provider: ContextProvider;
        constructor(props: ContextFactoryProps);
        render(): JSX.Element;
    }
}
declare module "libs/context/ContextInjectWrapper" {
    import * as React from 'react';
    import { WithContextProps } from "libs/context/Types";
    type InjectedWrapperProps<P> = {
        Component: React.ComponentType<WithContextProps<any, P>>;
    };
    export class InjectedWrapper<P> extends React.PureComponent<InjectedWrapperProps<P> & WithContextProps> {
        render(): JSX.Element;
    }
}
declare module "libs/context/withContext" {
    import * as React from 'react';
    export function withContext<C = {}, P = {}>(...keys: Array<keyof C>): <CP extends React.ComponentType<P & C & {
        setContext: import("libs/context/Types").SetContext<C>;
        getContext: import("libs/context/Types").GetContext<C>;
        listenContext: (callback: import("libs/context/Types").ListenContextCallback) => void;
    }>>(Component: CP) => {
        new (props: Readonly<P>): {
            render(): JSX.Element;
            renderConsumer: (context: any) => JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<P>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<P> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: P, context?: any): {
            render(): JSX.Element;
            renderConsumer: (context: any) => JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<P>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<P> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<{}>, nextContext: any): void;
        };
        contextType?: React.Context<any> | undefined;
    };
}
declare module "libs/context/ContextRender" {
    import * as React from 'react';
    import { WithContextProps } from "libs/context/Types";
    interface ContextRenderProps<C> {
        keys: Array<keyof C>;
        children: (x: WithContextProps<C>) => React.ReactNode;
    }
    export class ContextRender<C> extends React.PureComponent<ContextRenderProps<C>> {
        render(): JSX.Element;
        renderConsumer: (context: any) => React.ReactNode;
    }
}
declare module "libs/context/index" {
    export * from "libs/context/ContextFactory";
    export * from "libs/context/withContext";
    export * from "libs/context/ContextRender";
    export { WithContextProps } from "libs/context/Types";
}
declare module "libs/route/makeRoute" {
    import * as React from 'react';
    import { RouteComponentProps } from 'react-router-dom';
    import { RouteInfo } from "Types";
    type ViewStruct = {
        readonly routeInfo: RouteInfo;
    };
    type AppRouteComponentProps = RouteComponentProps;
    export type AppRouteComponent = React.ComponentType<AppRouteComponentProps> & ViewStruct;
    export const makeRoute: (Component: AppRouteComponent) => JSX.Element;
}
declare module "libs/route/makeRoutes" {
    import { AppRouteComponent } from "libs/route/makeRoute";
    export const makeRoutes: (Components: AppRouteComponent[]) => JSX.Element[];
}
declare module "libs/route/index" {
    export * from "libs/route/makeRoutes";
}
declare module "libs/i18n/I18NLoader" {
    import * as React from 'react';
    const _default: {
        new (props: Readonly<{}>): {
            render(): JSX.Element;
            renderConsumer: (context: any) => JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<{}> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: {}, context?: any): {
            render(): JSX.Element;
            renderConsumer: (context: any) => JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<{}> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
        };
        contextType?: React.Context<any> | undefined;
    };
    export default _default;
}
declare module "libs/i18n/createTranslatior" {
    interface CreateTranslatiorProps {
        readonly resources: {
            readonly [langkey: string]: {};
        };
    }
    export const createTranslatior: ({ resources }: CreateTranslatiorProps) => (source: string) => any;
}
declare module "libs/i18n/index" {
    import I18NLoader from "libs/i18n/I18NLoader";
    export { I18NLoader };
    export * from "libs/i18n/createTranslatior";
}
declare module "libs/index" {
    export * from "libs/context/index";
    export * from "libs/route/index";
    export * from "libs/i18n/index";
}
declare module "containers/AccessControl" {
    import { Policy } from "Types";
    interface AccessControlProps {
        readonly funcKey?: string;
        readonly policy: Array<Policy | string> | Policy | string;
        readonly children: React.ReactNode | (() => React.ReactNode);
        readonly values?: any;
        readonly renderDeny?: () => React.ReactNode;
    }
    const _default_1: {
        new (props: Readonly<AccessControlProps>): {
            render(): JSX.Element;
            renderConsumer: (context: any) => JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<AccessControlProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<AccessControlProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<AccessControlProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<AccessControlProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<AccessControlProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<AccessControlProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<AccessControlProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<AccessControlProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<AccessControlProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: AccessControlProps, context?: any): {
            render(): JSX.Element;
            renderConsumer: (context: any) => JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<AccessControlProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<AccessControlProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<AccessControlProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<AccessControlProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<AccessControlProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<AccessControlProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<AccessControlProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<AccessControlProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<AccessControlProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        contextType?: import("react").Context<any> | undefined;
    };
    export default _default_1;
}
declare module "containers/DelayRender" {
    import * as React from 'react';
    interface IDelayRenderProps {
        readonly timeout: number;
    }
    interface IDelayRenderState {
        readonly canRender: boolean;
    }
    export class DelayRender extends React.PureComponent<IDelayRenderProps, IDelayRenderState> {
        readonly state: {
            canRender: boolean;
        };
        componentWillMount(): void;
        render(): {} | null | undefined;
    }
}
declare module "containers/ErrorLogger" {
    import * as React from 'react';
    export interface ErrorPageProps {
        readonly error: Error | null;
        readonly errorInfo?: object;
    }
    interface ErrorLoggerProps {
        readonly ErrorPage: React.ComponentType<ErrorPageProps>;
        readonly setup?: () => void;
        readonly onError?: (props: {
            readonly error: Error | null;
            readonly errorInfo?: object;
        }) => void;
    }
    interface ErrorLoggerState {
        readonly error: Error | null;
        readonly errorInfo?: object;
        readonly loggerEnabled: boolean;
    }
    export class ErrorLogger extends React.PureComponent<ErrorLoggerProps, ErrorLoggerState> {
        constructor(props: ErrorLoggerProps);
        componentDidUpdate(): void;
        componentDidCatch(error: Error, errorInfo: object): void;
        render(): {} | null | undefined;
    }
}
declare module "containers/HistoryMiddleware" {
    import * as React from 'react';
    interface HistoryMiddlewareOwnProps {
        readonly children: React.ReactNode;
    }
    const _default_2: {
        new (props: Readonly<HistoryMiddlewareOwnProps>): {
            render(): JSX.Element;
            renderConsumer: (context: any) => JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<HistoryMiddlewareOwnProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<HistoryMiddlewareOwnProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<HistoryMiddlewareOwnProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<HistoryMiddlewareOwnProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<HistoryMiddlewareOwnProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<HistoryMiddlewareOwnProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<HistoryMiddlewareOwnProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<HistoryMiddlewareOwnProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<HistoryMiddlewareOwnProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: HistoryMiddlewareOwnProps, context?: any): {
            render(): JSX.Element;
            renderConsumer: (context: any) => JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<HistoryMiddlewareOwnProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<HistoryMiddlewareOwnProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<HistoryMiddlewareOwnProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<HistoryMiddlewareOwnProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<HistoryMiddlewareOwnProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<HistoryMiddlewareOwnProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<HistoryMiddlewareOwnProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<HistoryMiddlewareOwnProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<HistoryMiddlewareOwnProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        contextType?: React.Context<any> | undefined;
    };
    export default _default_2;
}
declare module "containers/BreakpointDetector" {
    import * as React from 'react';
    import { BreakPoint } from "Types";
    export interface BreakpointDetectorProps {
        readonly resolver?: (windowWidth: number) => BreakPoint;
    }
    const _default_3: {
        new (props: Readonly<BreakpointDetectorProps>): {
            render(): JSX.Element;
            renderConsumer: (context: any) => JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<BreakpointDetectorProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<BreakpointDetectorProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<BreakpointDetectorProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<BreakpointDetectorProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<BreakpointDetectorProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<BreakpointDetectorProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<BreakpointDetectorProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<BreakpointDetectorProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<BreakpointDetectorProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: BreakpointDetectorProps, context?: any): {
            render(): JSX.Element;
            renderConsumer: (context: any) => JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<BreakpointDetectorProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<BreakpointDetectorProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<BreakpointDetectorProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<BreakpointDetectorProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<BreakpointDetectorProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<BreakpointDetectorProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<BreakpointDetectorProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<BreakpointDetectorProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<BreakpointDetectorProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        contextType?: React.Context<any> | undefined;
    };
    export default _default_3;
}
declare module "containers/index" {
    export * from "containers/AccessControl";
    export * from "containers/DelayRender";
    export * from "containers/ErrorLogger";
    export { default as HistoryMiddleware } from "containers/HistoryMiddleware";
    export { default as AccessControl } from "containers/AccessControl";
    export { default as BreakpointDetector } from "containers/BreakpointDetector";
}
declare module "core/Root" {
    import * as React from 'react';
    import { ServiceWorkerRegistrationProps } from "app/index";
    import { AppCoreContext } from "Types";
    export interface RootProps<Context extends AppCoreContext = AppCoreContext> {
        readonly renderApp: () => React.ReactNode;
        readonly initialContext: Partial<Context>;
        readonly SWRegistrationProps?: ServiceWorkerRegistrationProps;
    }
    export class Root extends React.Component<RootProps> {
        static readonly contextType: React.Context<{}>;
        static readonly render: (rootElement: HTMLElement, rootProps: RootProps<AppCoreContext<{}>>) => void;
        componentDidMount(): void;
        render(): JSX.Element;
    }
}
declare module "core/View" {
    import * as React from 'react';
    import { RouteComponentProps } from 'react-router';
    export class View<P extends RouteComponentProps, S = {}> extends React.PureComponent<P, S> {
        static readonly contextType: React.Context<{}>;
        readonly title: string;
        constructor(props: P);
        readonly setDocumentTitle: () => void;
        componentDidUpdate(): void;
    }
}
declare module "core/index" {
    export * from "core/Root";
    export * from "core/View";
}
declare module "index" {
    export * from "Types";
    export * from "app/index";
    export * from "core/index";
    export * from "libs/index";
}
