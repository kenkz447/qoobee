import * as React from 'react';
declare const _default: {
    new (props: Readonly<{}>): {
        render(): JSX.Element;
        renderConsumer: (context: any) => JSX.Element;
        context: any;
        setState<K extends never>(state: {} | Pick<{}, K> | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<{}>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: {}, context?: any): {
        render(): JSX.Element;
        renderConsumer: (context: any) => JSX.Element;
        context: any;
        setState<K extends never>(state: {} | Pick<{}, K> | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<{}>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    contextType?: React.Context<any> | undefined;
};
export default _default;
