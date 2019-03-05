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
class I18NLoader extends React.PureComponent {
    static getDerivedStateFromProps(nextProps, state) {
        if (nextProps.currentLanguage !== state.currentLanguage) {
            return {
                currentLanguage: nextProps.currentLanguage,
                needsUpdate: true
            };
        }
        return null;
    }
    constructor(props) {
        super(props);
        this.state = {
            currentLanguage: props.currentLanguage
        };
        localStorage.setItem('lang', this.state.currentLanguage);
    }
    componentDidUpdate() {
        if (this.state.needsUpdate) {
            localStorage.setItem('lang', this.state.currentLanguage);
            this.setState({
                needsUpdate: false
            });
        }
    }
    render() {
        if (this.state.needsUpdate) {
            return null;
        }
        return this.props.children;
    }
}
exports.default = react_context_service_1.withContext('currentLanguage')(I18NLoader);
