import * as React from 'react';
interface HistoryMiddlewareOwnProps {
    readonly children: React.ReactNode;
}
declare const _default: {
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
export default _default;
