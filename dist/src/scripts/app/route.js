"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
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
var react_context_service_1 = require("react-context-service");
var react_router_dom_1 = require("react-router-dom");
var AccessControl_1 = __importDefault(require("../containers/AccessControl"));
exports.route = function (Component) {
    if (!Component.routeInfo) {
        throw Error('Default Props with routeProps needed in Route Component!');
    }
    var routeProps = Component.routeInfo;
    var initialContext = Component.withContext || [];
    // tslint:disable-next-line:no-any
    var WithContextInject = react_context_service_1.withContext.apply(void 0, __spread(initialContext))(function (props) {
        var pageKey = Component.getPageKey && Component.getPageKey(props);
        return (React.createElement(Component, __assign({ key: pageKey }, props)));
    });
    if (routeProps.policies) {
        return (React.createElement(react_router_dom_1.Route, __assign({ key: routeProps.path }, routeProps), function (componentProps) {
            return (React.createElement(AccessControl_1.default, { policy: routeProps.policies, renderDeny: function () { return React.createElement(react_router_dom_1.Redirect, { to: "/deny" }); } }, function () { return React.createElement(WithContextInject, __assign({}, componentProps)); }));
        }));
    }
    return (React.createElement(react_router_dom_1.Route, __assign({ key: routeProps.path }, routeProps, { component: WithContextInject })));
};
exports.routeFrom = function (Components) { return Components.reduce(function (currenValue, Component) {
    return __spread(currenValue, [exports.route(Component)]);
}, []); };
