"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var ErrorLogger = /** @class */ (function (_super) {
    __extends(ErrorLogger, _super);
    function ErrorLogger(props) {
        var _this = _super.call(this, props) || this;
        var loggerEnabled = process.env.NODE_ENV === 'production';
        _this.state = {
            error: null,
            loggerEnabled: loggerEnabled
        };
        if (!loggerEnabled) {
            return _this;
        }
        if (!props.setup) {
            return _this;
        }
        props.setup();
        return _this;
    }
    ErrorLogger.prototype.componentDidUpdate = function () {
        var _a = this.state, loggerEnabled = _a.loggerEnabled, error = _a.error, errorInfo = _a.errorInfo;
        if (!loggerEnabled) {
            return;
        }
        var onError = this.props.onError;
        if (!onError) {
            return;
        }
        onError({
            error: error,
            errorInfo: errorInfo
        });
    };
    ErrorLogger.prototype.componentDidCatch = function (error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    };
    ErrorLogger.prototype.render = function () {
        var _a = this.state, error = _a.error, errorInfo = _a.errorInfo;
        if (!error) {
            return this.props.children;
        }
        var ErrorPage = this.props.ErrorPage;
        return React.createElement(ErrorPage, { error: error, errorInfo: errorInfo });
    };
    return ErrorLogger;
}(React.PureComponent));
exports.ErrorLogger = ErrorLogger;
