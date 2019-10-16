import { Policy } from '../Types';
interface AccessControlProps {
    readonly funcKey?: string;
    readonly policy: Array<Policy | string> | Policy | string;
    readonly children: React.ReactNode | (() => React.ReactNode);
    readonly values?: any;
    readonly renderDeny?: () => React.ReactNode;
}
declare const _default: {
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
export default _default;
