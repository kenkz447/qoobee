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
var app_1 = require("../app");
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View(props) {
        var _this = _super.call(this, props) || this;
        _this.setDocumentTitle = function () {
            document.title = _this.title;
        };
        _this.setDocumentTitle();
        return _this;
    }
    Object.defineProperty(View.prototype, "title", {
        get: function () {
            var InheritPage = Object.getPrototypeOf(this).constructor;
            if (!InheritPage.hasOwnProperty('routeInfo')) {
                return 'Untitle page';
            }
            var routeInfo = InheritPage.routeInfo;
            return typeof routeInfo.title === 'string' ? routeInfo.title : routeInfo.title(this.props, this.state);
        },
        enumerable: true,
        configurable: true
    });
    View.prototype.componentDidUpdate = function () {
        this.setDocumentTitle();
    };
    View.contextType = app_1.RootContext;
    return View;
}(React.PureComponent));
exports.View = View;
