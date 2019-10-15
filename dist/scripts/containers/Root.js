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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var app_1 = require("../app");
var HistoryMiddleware_1 = __importDefault(require("./HistoryMiddleware"));
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
        return (React.createElement(libs_1.ContextFactory, { context: app_1.RootContext, initContextValue: initialContext },
            React.createElement(HistoryMiddleware_1.default, null, renderApp())));
    };
    return Root;
}(React.Component));
exports.Root = Root;
