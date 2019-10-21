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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var ContextProvider = /** @class */ (function (_super) {
    __extends(ContextProvider, _super);
    function ContextProvider(props) {
        var _this = _super.call(this, props) || this;
        _this.setContextProxy = function (source, newContext) {
            var newContextKey = Object.keys(newContext);
            var oldContext = _this.getContext(newContextKey);
            var setContextCallback = (function () {
                //
            });
            _this.setState(newContext, setContextCallback);
        };
        _this.getContext = function () {
            var contextKeys = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                contextKeys[_i] = arguments[_i];
            }
            if (!contextKeys || !contextKeys.length) {
                return Object.seal(_this.state);
            }
            return contextKeys.reduce(function (gettedContext, currentKey) {
                gettedContext[currentKey] = _this.state[currentKey];
                return gettedContext;
            }, {});
        };
        var initContextValue = props.initContextValue;
        var _a = _this, setContextProxy = _a.setContextProxy, getContext = _a.getContext;
        _this.state = __assign(__assign({}, initContextValue), { setContext: function (context) {
                setContextProxy(this, context);
            }, getContext: getContext });
        return _this;
    }
    ContextProvider.prototype.componentDidMount = function () {
        var _this = this;
        var event = this.props.event;
        if (event) {
            this._unlistenEvent = event.listen(function (payload) {
                _this.setState(payload);
            });
        }
    };
    ContextProvider.prototype.componentWillUnmount = function () {
        if (!this._unlistenEvent) {
            return;
        }
        this._unlistenEvent();
    };
    ContextProvider.prototype.render = function () {
        var _a = this.props, contextType = _a.contextType, children = _a.children;
        return (React.createElement(contextType.Provider, { value: this.state }, typeof children === 'function'
            ? React.createElement(children, this.state)
            : children));
    };
    return ContextProvider;
}(React.Component));
exports.ContextProvider = ContextProvider;
