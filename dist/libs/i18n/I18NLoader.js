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
var context_1 = require("../context");
var app_1 = require("../../app");
var I18NLoaderInjected = /** @class */ (function (_super) {
    __extends(I18NLoaderInjected, _super);
    function I18NLoaderInjected(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            currentLanguage: props.currentLanguage
        };
        localStorage.setItem('lang', _this.state.currentLanguage);
        return _this;
    }
    I18NLoaderInjected.getDerivedStateFromProps = function (nextProps, state) {
        if (nextProps.currentLanguage !== state.currentLanguage) {
            return {
                currentLanguage: nextProps.currentLanguage,
                needsUpdate: true
            };
        }
        return null;
    };
    I18NLoaderInjected.prototype.componentDidUpdate = function () {
        if (this.state.needsUpdate) {
            localStorage.setItem('lang', this.state.currentLanguage);
            this.setState({
                needsUpdate: false
            });
        }
    };
    I18NLoaderInjected.prototype.render = function () {
        if (this.state.needsUpdate) {
            return null;
        }
        return this.props.children;
    };
    return I18NLoaderInjected;
}(React.PureComponent));
var I18NLoaderInjector = context_1.withContext(app_1.rootContextType, 'currentLanguage');
exports.I18NLoader = I18NLoaderInjector(I18NLoaderInjected);
