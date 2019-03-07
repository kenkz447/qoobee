"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
class ErrorLogger extends React.PureComponent {
    constructor(props) {
        super(props);
        const loggerEnabled = process.env.NODE_ENV === 'production';
        this.state = {
            error: null,
            loggerEnabled: loggerEnabled
        };
        if (!loggerEnabled) {
            return;
        }
        if (!props.setup) {
            return;
        }
        props.setup();
    }
    componentDidUpdate() {
        const { loggerEnabled, error, errorInfo } = this.state;
        if (!loggerEnabled) {
            return;
        }
        const { onError } = this.props;
        if (!onError) {
            return;
        }
        onError({
            error,
            errorInfo
        });
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }
    render() {
        const { error, errorInfo } = this.state;
        if (!error) {
            return this.props.children;
        }
        const { ErrorPage } = this.props;
        return React.createElement(ErrorPage, { error: error, errorInfo: errorInfo });
    }
}
exports.ErrorLogger = ErrorLogger;
