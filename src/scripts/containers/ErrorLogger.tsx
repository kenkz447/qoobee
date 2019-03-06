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

export class ErrorLogger extends React.PureComponent<
    ErrorLoggerProps,
    ErrorLoggerState
    > {

    constructor(props: ErrorLoggerProps) {
        super(props);

        const loggerEnabled = process.env.NODE_ENV === 'production';

        this.state = {
            error: null,
            loggerEnabled: loggerEnabled
        };

        if (!loggerEnabled) {
            return;
        }

        props.setup();
    }

    public componentDidUpdate() {
        const { loggerEnabled, error, errorInfo } = this.state;

        if (!loggerEnabled) {
            return;
        }

        this.props.onError({
            error,
            errorInfo
        });
    }

    public componentDidCatch(error: Error, errorInfo: object) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    public render() {
        const { error, errorInfo } = this.state;
        if (!error) {
            return this.props.children;
        }

        const { ErrorPage } = this.props;

        return <ErrorPage error={error} errorInfo={errorInfo} />;
    }
}