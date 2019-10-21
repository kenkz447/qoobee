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
var BreakpointDetector = /** @class */ (function (_super) {
    __extends(BreakpointDetector, _super);
    function BreakpointDetector(props) {
        var _this = _super.call(this, props) || this;
        _this.onWindowResize = function () {
            var setContext = _this.context.setContext;
            var resolver = _this.props.resolver;
            var nextBreakpoint = resolver(window.innerWidth);
            setContext({
                currentBreakpoint: nextBreakpoint
            });
        };
        _this.onWindowResize();
        return _this;
    }
    BreakpointDetector.prototype.componentDidMount = function () {
        window.addEventListener('resize', this.onWindowResize);
    };
    BreakpointDetector.prototype.render = function () {
        return this.props.children || null;
    };
    BreakpointDetector.contextType = app_1.rootContextType;
    BreakpointDetector.defaultProps = {
        resolver: function (windowWith) {
            if (windowWith >= 1200) {
                return 'lg';
            }
            if (windowWith >= 992) {
                return 'md';
            }
            return 'sm';
        }
    };
    return BreakpointDetector;
}(React.PureComponent));
exports.BreakpointDetector = BreakpointDetector;
