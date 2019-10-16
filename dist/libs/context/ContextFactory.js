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
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "./ContextProvider"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = __importStar(require("react"));
    var ContextProvider_1 = require("./ContextProvider");
    var ContextFactory = /** @class */ (function (_super) {
        __extends(ContextFactory, _super);
        function ContextFactory(props) {
            var _this = _super.call(this, props) || this;
            var context = _this.props.context;
            _this.Context = context;
            ContextFactory.instance = _this;
            return _this;
        }
        ContextFactory.prototype.render = function () {
            var _this = this;
            var _a = this.props, loggingEnabled = _a.loggingEnabled, children = _a.children, initContextValue = _a.initContextValue;
            return (React.createElement(ContextProvider_1.ContextProvider, { ref: function (e) { return _this.provider = e; }, initContextValue: initContextValue, loggingEnabled: loggingEnabled }, children));
        };
        return ContextFactory;
    }(React.Component));
    exports.ContextFactory = ContextFactory;
});
