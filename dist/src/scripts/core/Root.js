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
const swRegistration_1 = require("./swRegistration");
exports.RootContext = React.createContext({});
class Root extends React.Component {
    componentDidMount() {
        const { SWRegistrationProps } = this.props;
        if (!SWRegistrationProps) {
            return;
        }
        swRegistration_1.swRegistration(SWRegistrationProps);
    }
    render() {
        const { AppContent, initialContext } = this.props;
        return (React.createElement(react_context_service_1.ContextCreator, { context: exports.RootContext, initContextValue: initialContext },
            React.createElement(AppContent, null)));
    }
}
exports.Root = Root;
