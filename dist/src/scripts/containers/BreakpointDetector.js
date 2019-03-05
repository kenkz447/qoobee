"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_context_service_1 = require("react-context-service");
class BreakpointDetector extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onWindowResize = () => {
            const { resolver, setContext } = this.props;
            const nextBreakpoint = resolver(window.innerWidth);
            setContext({
                currentBreakpoint: nextBreakpoint
            });
        };
        this.onWindowResize();
    }
    componentDidMount() {
        window.addEventListener('resize', this.onWindowResize);
    }
    render() {
        return this.props.children || null;
    }
}
BreakpointDetector.defaultProps = {
    resolver: (windowWith) => {
        if (windowWith >= 1200) {
            return 'lg';
        }
        if (windowWith >= 992) {
            return 'md';
        }
        return 'sm';
    }
};
exports.default = react_context_service_1.withContext()(BreakpointDetector);
