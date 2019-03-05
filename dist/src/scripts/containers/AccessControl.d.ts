import { Policy } from '../app';
interface AccessControlProps {
    readonly funcKey?: string;
    readonly policy: Array<Policy | string> | Policy | string;
    readonly children: React.ReactNode | ((canAccess: boolean) => React.ReactNode);
}
declare const _default: {
    new (props: Readonly<AccessControlProps>): {
        render(): JSX.Element;
        renderConsumer: (context: any) => JSX.Element;
        context: any;
        setState<K extends never>(state: {} | Pick<{}, K> | ((prevState: Readonly<{}>, props: Readonly<AccessControlProps>) => {} | Pick<{}, K> | null) | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{
            children?: import("react").ReactNode;
        }> & Readonly<AccessControlProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
    };
    new (props: AccessControlProps, context?: any): {
        render(): JSX.Element;
        renderConsumer: (context: any) => JSX.Element;
        context: any;
        setState<K extends never>(state: {} | Pick<{}, K> | ((prevState: Readonly<{}>, props: Readonly<AccessControlProps>) => {} | Pick<{}, K> | null) | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{
            children?: import("react").ReactNode;
        }> & Readonly<AccessControlProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
    };
    contextType?: import("react").Context<any> | undefined;
};
export default _default;
