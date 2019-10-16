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
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "./ContextFactory"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = __importStar(require("react"));
    var ContextFactory_1 = require("./ContextFactory");
    var ContextRender = /** @class */ (function (_super) {
        __extends(ContextRender, _super);
        function ContextRender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.renderConsumer = function (context) {
                var _a = _this.props, children = _a.children, keys = _a.keys;
                var contextToProps = keys.reduce(function (childContext, childContextKey) {
                    var _a;
                    return __assign(__assign({}, childContext), (_a = {}, _a[childContextKey] = context[childContextKey], _a));
                }, {
                    setContext: context.setContext,
                    getContext: context.getContext
                });
                return children(contextToProps);
            };
            return _this;
        }
        ContextRender.prototype.render = function () {
            var Context = ContextFactory_1.ContextFactory.instance.Context;
            return (React.createElement(Context.Consumer, null, this.renderConsumer));
        };
        return ContextRender;
    }(React.PureComponent));
    exports.ContextRender = ContextRender;
});
