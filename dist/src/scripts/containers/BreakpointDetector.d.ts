import * as React from 'react';
import { BreakPoint } from '../core';
export interface BreakpointDetectorProps {
    readonly resolver?: (windowWidth: number) => BreakPoint;
}
declare const _default: {
    new (props: Readonly<BreakpointDetectorProps>): {
        render(): JSX.Element;
        renderConsumer: (context: any) => JSX.Element;
        context: any;
        setState<K extends never>(state: {} | Pick<{}, K> | ((prevState: Readonly<{}>, props: Readonly<BreakpointDetectorProps>) => {} | Pick<{}, K> | null) | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<BreakpointDetectorProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: BreakpointDetectorProps, context?: any): {
        render(): JSX.Element;
        renderConsumer: (context: any) => JSX.Element;
        context: any;
        setState<K extends never>(state: {} | Pick<{}, K> | ((prevState: Readonly<{}>, props: Readonly<BreakpointDetectorProps>) => {} | Pick<{}, K> | null) | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<BreakpointDetectorProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    contextType?: React.Context<any> | undefined;
};
export default _default;
