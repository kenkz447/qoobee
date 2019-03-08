"use strict";
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
const React = __importStar(require("react"));
const react_context_service_1 = require("react-context-service");
const react_router_dom_1 = require("react-router-dom");
const AccessControl_1 = __importDefault(require("../containers/AccessControl"));
exports.route = (Component) => {
    if (!Component.routeInfo) {
        throw Error('Default Props with routeProps needed in Route Component!');
    }
    const routeProps = Component.routeInfo;
    const initialContext = Component.withContext || [];
    // tslint:disable-next-line:no-any
    const WithContextInject = react_context_service_1.withContext(...initialContext)((props) => {
        const pageKey = Component.getPageKey && Component.getPageKey(props);
        return (React.createElement(Component, Object.assign({ key: pageKey }, props)));
    });
    if (routeProps.policies) {
        return (React.createElement(react_router_dom_1.Route, Object.assign({ key: routeProps.path }, routeProps), (componentProps) => {
            return (React.createElement(AccessControl_1.default, { policy: routeProps.policies, renderDeny: () => React.createElement(react_router_dom_1.Redirect, { to: "/deny" }) }, () => React.createElement(WithContextInject, Object.assign({}, componentProps))));
        }));
    }
    return (React.createElement(react_router_dom_1.Route, Object.assign({ key: routeProps.path }, routeProps, { component: WithContextInject })));
};
exports.routeFrom = (Components) => Components.reduce((currenValue, Component) => {
    return [...currenValue, exports.route(Component)];
}, []);
