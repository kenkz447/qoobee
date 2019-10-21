import * as React from 'react';
import { WithContextProps } from '../libs';
import { AppCoreContext } from '../Types';
export declare const HistoryMiddlewareInjector: <P, CP extends React.ComponentType<P & {
    setContext: import("../libs/context/Types").SetContext<{}>;
    getContext: import("../libs/context/Types").GetContext<{}>;
}> = React.ComponentType<P & {
    setContext: import("../libs/context/Types").SetContext<{}>;
    getContext: import("../libs/context/Types").GetContext<{}>;
}>>(Component: CP) => {
    new (props: Readonly<P>): {
        readonly renderConsumer: (contextValue: WithContextProps<AppCoreContext<{}>, P>) => JSX.Element;
        render(): JSX.Element;
        context: any;
        setState<K extends "s">(state: {
            s: string;
        } | ((prevState: Readonly<{
            s: string;
        }>, props: Readonly<P>) => {
            s: string;
        } | Pick<{
            s: string;
        }, K> | null) | Pick<{
            s: string;
        }, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<P> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{
            s: string;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<{
            s: string;
        }>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<{
            s: string;
        }>): any;
        componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<{
            s: string;
        }>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<{
            s: string;
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<{
            s: string;
        }>, nextContext: any): void;
    };
    new (props: P, context?: any): {
        readonly renderConsumer: (contextValue: WithContextProps<AppCoreContext<{}>, P>) => JSX.Element;
        render(): JSX.Element;
        context: any;
        setState<K extends "s">(state: {
            s: string;
        } | ((prevState: Readonly<{
            s: string;
        }>, props: Readonly<P>) => {
            s: string;
        } | Pick<{
            s: string;
        }, K> | null) | Pick<{
            s: string;
        }, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<P> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{
            s: string;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<{
            s: string;
        }>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<{
            s: string;
        }>): any;
        componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<{
            s: string;
        }>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<{
            s: string;
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<{
            s: string;
        }>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export declare const HistoryMiddleware: {
    new (props: Readonly<unknown>): {
        readonly renderConsumer: (contextValue: WithContextProps<AppCoreContext<{}>, {}>) => JSX.Element;
        render(): JSX.Element;
        context: any;
        setState<K extends "s">(state: {
            s: string;
        } | ((prevState: Readonly<{
            s: string;
        }>, props: Readonly<unknown>) => {
            s: string;
        } | Pick<{
            s: string;
        }, K> | null) | Pick<{
            s: string;
        }, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<unknown> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{
            s: string;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<unknown>, nextState: Readonly<{
            s: string;
        }>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<unknown>, prevState: Readonly<{
            s: string;
        }>): any;
        componentDidUpdate?(prevProps: Readonly<unknown>, prevState: Readonly<{
            s: string;
        }>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<unknown>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<unknown>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<unknown>, nextState: Readonly<{
            s: string;
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<unknown>, nextState: Readonly<{
            s: string;
        }>, nextContext: any): void;
    };
    new (props: unknown, context?: any): {
        readonly renderConsumer: (contextValue: WithContextProps<AppCoreContext<{}>, {}>) => JSX.Element;
        render(): JSX.Element;
        context: any;
        setState<K extends "s">(state: {
            s: string;
        } | ((prevState: Readonly<{
            s: string;
        }>, props: Readonly<unknown>) => {
            s: string;
        } | Pick<{
            s: string;
        }, K> | null) | Pick<{
            s: string;
        }, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<unknown> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{
            s: string;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<unknown>, nextState: Readonly<{
            s: string;
        }>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<unknown>, prevState: Readonly<{
            s: string;
        }>): any;
        componentDidUpdate?(prevProps: Readonly<unknown>, prevState: Readonly<{
            s: string;
        }>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<unknown>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<unknown>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<unknown>, nextState: Readonly<{
            s: string;
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<unknown>, nextState: Readonly<{
            s: string;
        }>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
