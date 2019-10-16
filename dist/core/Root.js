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
        define(["require", "exports", "react", "react-dom", "../app", "../containers", "../libs"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = __importStar(require("react"));
    var ReactDOM = __importStar(require("react-dom"));
    var app_1 = require("../app");
    var containers_1 = require("../containers");
    var libs_1 = require("../libs");
    var Root = /** @class */ (function (_super) {
        __extends(Root, _super);
        function Root() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Root.prototype.componentDidMount = function () {
            var SWRegistrationProps = this.props.SWRegistrationProps;
            if (!SWRegistrationProps) {
                return;
            }
            app_1.swRegistration(SWRegistrationProps);
        };
        Root.prototype.render = function () {
            var _a = this.props, renderApp = _a.renderApp, initialContext = _a.initialContext;
            return (React.createElement(libs_1.ContextFactory, { context: Root.contextType, initContextValue: initialContext },
                React.createElement(containers_1.HistoryMiddleware, null, renderApp())));
        };
        Root.contextType = React.createContext({});
        Root.render = function (rootElement, rootProps) {
            ReactDOM.render(React.createElement(Root, __assign({}, rootProps)), rootElement);
        };
        return Root;
    }(React.Component));
    exports.Root = Root;
});
