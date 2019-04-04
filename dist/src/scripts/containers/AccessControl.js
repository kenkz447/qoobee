"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_context_service_1 = require("react-context-service");
function policyIsAllowed(policies, funcKey, policy, values, appContext) {
    if (typeof policy === 'function') {
        return policy(appContext, funcKey, values);
    }
    return policies[policy] ? policies[policy](appContext, funcKey) : false;
}
function AccessControl(props) {
    var e_1, _a;
    var funcKey = props.funcKey, policy = props.policy, children = props.children, policies = props.policies, getContext = props.getContext, renderDeny = props.renderDeny, values = props.values;
    if (!policies) {
        if (typeof renderDeny === 'function') {
            return renderDeny();
        }
        return null;
    }
    var appContext = getContext();
    var isAllowed = true;
    if (Array.isArray(policy)) {
        try {
            for (var policy_1 = __values(policy), policy_1_1 = policy_1.next(); !policy_1_1.done; policy_1_1 = policy_1.next()) {
                var policyName = policy_1_1.value;
                isAllowed = policyIsAllowed(policies, funcKey, policyName, values, appContext);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (policy_1_1 && !policy_1_1.done && (_a = policy_1.return)) _a.call(policy_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    else {
        isAllowed = policyIsAllowed(policies, funcKey, policy, values, appContext);
    }
    if (!isAllowed) {
        if (typeof renderDeny === 'function') {
            return renderDeny();
        }
        return null;
    }
    return typeof children === 'function' ? children() : children;
}
exports.default = react_context_service_1.withContext('policies')(AccessControl);
