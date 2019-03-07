"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_context_service_1 = require("react-context-service");
function policyIsAllowed(policies, funcKey, policy, values, appContext) {
    if (typeof policy === 'function') {
        return policy(appContext, funcKey, values);
    }
    return policies[policy] ? policies[policy](appContext, funcKey) : false;
}
function AccessControl(props) {
    const { funcKey, policy, children, policies, getContext, renderDeny, values } = props;
    if (!policies) {
        if (typeof renderDeny === 'function') {
            return renderDeny();
        }
        return null;
    }
    const appContext = getContext();
    let isAllowed = true;
    if (Array.isArray(policy)) {
        for (const policyName of policy) {
            isAllowed = policyIsAllowed(policies, funcKey, policyName, values, appContext);
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
