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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var containers_1 = require("../../containers");
exports.makeRoute = function (Component) {
    if (!Component.routeInfo) {
        throw Error('Default Props with routeProps needed in Route Component!');
    }
    var routeInfo = Component.routeInfo;
    var routeProps = {
        key: routeInfo.path,
        path: routeInfo.path,
        exact: routeInfo.exact
    };
    if (routeInfo.policies) {
        return (React.createElement(react_router_dom_1.Route, __assign({}, routeProps), function (componentProps) {
            return (React.createElement(containers_1.AccessControl, { policy: routeInfo.policies, renderDeny: function () { return React.createElement(react_router_dom_1.Redirect, { to: "/deny" }); } }, function () { return React.createElement(Component, __assign({}, componentProps)); }));
        }));
    }
    return (React.createElement(react_router_dom_1.Route, __assign({}, routeProps, { component: Component })));
};
