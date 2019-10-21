import * as React from 'react';
import { WithContextProps } from './Types';
export declare function withContext<C = {}, CO extends C = C>(Context: React.Context<CO>, ...keys: Array<keyof CO>): <P, CP extends React.ComponentType<P & C & {
    setContext: import("./Types").SetContext<C>;
    getContext: import("./Types").GetContext<C>;
}> = React.ComponentType<P & C & {
    setContext: import("./Types").SetContext<C>;
    getContext: import("./Types").GetContext<C>;
}>>(Component: CP) => {
    new (props: Readonly<P>): {
        readonly renderConsumer: (contextValue: WithContextProps<CO, P>) => JSX.Element;
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
        readonly renderConsumer: (contextValue: WithContextProps<CO, P>) => JSX.Element;
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
