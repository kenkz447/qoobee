import * as React from 'react';
export interface ErrorPageProps {
    readonly error: Error | null;
    readonly errorInfo?: object;
}
interface ErrorLoggerProps {
    readonly ErrorPage: React.ComponentType<ErrorPageProps>;
    readonly setup: () => void;
    readonly onError: (props: {
        readonly error: Error | null;
        readonly errorInfo?: object;
    }) => void;
}
interface ErrorLoggerState {
    readonly error: Error | null;
    readonly errorInfo?: object;
    readonly loggerEnabled: boolean;
}
export declare class ErrorLogger extends React.PureComponent<ErrorLoggerProps, ErrorLoggerState> {
    constructor(props: ErrorLoggerProps);
    componentDidUpdate(): void;
    componentDidCatch(error: Error, errorInfo: object): void;
    render(): {} | null | undefined;
}
export {};
