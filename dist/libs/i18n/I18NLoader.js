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
        define(["require", "exports", "react", "../context"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = __importStar(require("react"));
    var context_1 = require("../context");
    var I18NLoader = /** @class */ (function (_super) {
        __extends(I18NLoader, _super);
        function I18NLoader(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                currentLanguage: props.currentLanguage
            };
            localStorage.setItem('lang', _this.state.currentLanguage);
            return _this;
        }
        I18NLoader.getDerivedStateFromProps = function (nextProps, state) {
            if (nextProps.currentLanguage !== state.currentLanguage) {
                return {
                    currentLanguage: nextProps.currentLanguage,
                    needsUpdate: true
                };
            }
            return null;
        };
        I18NLoader.prototype.componentDidUpdate = function () {
            if (this.state.needsUpdate) {
                localStorage.setItem('lang', this.state.currentLanguage);
                this.setState({
                    needsUpdate: false
                });
            }
        };
        I18NLoader.prototype.render = function () {
            if (this.state.needsUpdate) {
                return null;
            }
            return this.props.children;
        };
        return I18NLoader;
    }(React.PureComponent));
    exports.default = context_1.withContext('currentLanguage')(I18NLoader);
});
