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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
var ContextInjectWrapper_1 = require("./ContextInjectWrapper");
function withContext(Context) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    // tslint:disable-next-line:max-line-length
    return function (Component) {
        var getContextToProps = function (contextValue) {
            var e_1, _a;
            if (!keys.length) {
                return contextValue;
            }
            var contextToProps = {};
            try {
                for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                    var contextKey = keys_1_1.value;
                    contextToProps[contextKey] = contextValue[contextKey];
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            contextToProps.setContext = contextValue.setContext;
            contextToProps.getContext = contextValue.getContext;
            return contextToProps;
        };
        return /** @class */ (function (_super) {
            __extends(ContextInjector, _super);
            function ContextInjector() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.renderConsumer = function (contextValue) {
                    var contextToProps = getContextToProps(contextValue);
                    var componentPropsWithContext = Object.assign(contextToProps, _this.props);
                    return React.createElement(ContextInjectWrapper_1.InjectedWrapper, __assign({ Component: Component }, componentPropsWithContext));
                };
                return _this;
            }
            ContextInjector.prototype.render = function () {
                return (React.createElement(Context.Consumer, null, this.renderConsumer));
            };
            return ContextInjector;
        }(React.PureComponent));
    };
}
exports.withContext = withContext;
