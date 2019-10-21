import * as React from 'react';
import { AppCoreContext } from '../../Types';
import { WithContextProps } from '../context';
interface I18NLoaderProps {
    abc: string;
}
export declare const I18NLoader: {
    new (props: Readonly<I18NLoaderProps>): {
        readonly renderConsumer: (contextValue: WithContextProps<AppCoreContext<{}>, I18NLoaderProps>) => JSX.Element;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<I18NLoaderProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<I18NLoaderProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<I18NLoaderProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<I18NLoaderProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<I18NLoaderProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<I18NLoaderProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<I18NLoaderProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<I18NLoaderProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<I18NLoaderProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: I18NLoaderProps, context?: any): {
        readonly renderConsumer: (contextValue: WithContextProps<AppCoreContext<{}>, I18NLoaderProps>) => JSX.Element;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<I18NLoaderProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<I18NLoaderProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<I18NLoaderProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<I18NLoaderProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<I18NLoaderProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<I18NLoaderProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<I18NLoaderProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<I18NLoaderProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<I18NLoaderProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export {};
