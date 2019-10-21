import * as React from 'react';
import { AppCoreContext } from '../../Types';
import { WithContextProps } from '../context';
interface I18NLoaderProps {
}
export declare const I18NLoader: {
    new (props: Readonly<I18NLoaderProps>): {
        readonly renderConsumer: (contextValue: WithContextProps<AppCoreContext<{}>, I18NLoaderProps>) => JSX.Element;
        render(): JSX.Element;
        context: any;
        setState<K extends "s">(state: {
            s: string;
        } | ((prevState: Readonly<{
            s: string;
        }>, props: Readonly<I18NLoaderProps>) => {
            s: string;
        } | Pick<{
            s: string;
        }, K> | null) | Pick<{
            s: string;
        }, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<I18NLoaderProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{
            s: string;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<I18NLoaderProps>, nextState: Readonly<{
            s: string;
        }>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<I18NLoaderProps>, prevState: Readonly<{
            s: string;
        }>): any;
        componentDidUpdate?(prevProps: Readonly<I18NLoaderProps>, prevState: Readonly<{
            s: string;
        }>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<I18NLoaderProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<I18NLoaderProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<I18NLoaderProps>, nextState: Readonly<{
            s: string;
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<I18NLoaderProps>, nextState: Readonly<{
            s: string;
        }>, nextContext: any): void;
    };
    new (props: I18NLoaderProps, context?: any): {
        readonly renderConsumer: (contextValue: WithContextProps<AppCoreContext<{}>, I18NLoaderProps>) => JSX.Element;
        render(): JSX.Element;
        context: any;
        setState<K extends "s">(state: {
            s: string;
        } | ((prevState: Readonly<{
            s: string;
        }>, props: Readonly<I18NLoaderProps>) => {
            s: string;
        } | Pick<{
            s: string;
        }, K> | null) | Pick<{
            s: string;
        }, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<I18NLoaderProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{
            s: string;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<I18NLoaderProps>, nextState: Readonly<{
            s: string;
        }>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<I18NLoaderProps>, prevState: Readonly<{
            s: string;
        }>): any;
        componentDidUpdate?(prevProps: Readonly<I18NLoaderProps>, prevState: Readonly<{
            s: string;
        }>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<I18NLoaderProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<I18NLoaderProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<I18NLoaderProps>, nextState: Readonly<{
            s: string;
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<I18NLoaderProps>, nextState: Readonly<{
            s: string;
        }>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export {};
