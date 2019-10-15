import * as React from 'react';
import { BreakPoint } from '../app';
export interface BreakpointDetectorProps {
    readonly resolver?: (windowWidth: number) => BreakPoint;
}
declare const _default: {
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
export default _default;
