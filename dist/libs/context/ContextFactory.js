"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var ContextProvider_1 = require("./ContextProvider");
function ContextFactory(props) {
    var children = props.children, contextType = props.contextType, initContextValue = props.initContextValue, event = props.event;
    var defaultContextValue = React.useContext(contextType);
    return (React.createElement(ContextProvider_1.ContextProvider, { contextType: contextType, initContextValue: initContextValue || defaultContextValue, event: event }, children));
}
exports.ContextFactory = ContextFactory;
