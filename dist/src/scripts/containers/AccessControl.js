"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_context_service_1 = require("react-context-service");
function policyIsAllowed(policies, funcKey, policy, appContext) {
    if (typeof policy === 'function') {
        return policy(appContext, funcKey);
    }
    return policies[policy] ? policies[policy](appContext, funcKey) : false;
}
function AccessControl(props) {
    const { funcKey, policy, children, policies, getContext } = props;
    if (!policies) {
        if (typeof children === 'function') {
            return children(false);
        }
        return null;
    }
    const appContext = getContext();
    let isAllowed = true;
    if (Array.isArray(policy)) {
        for (const policyName of policy) {
            isAllowed = policyIsAllowed(policies, funcKey, policyName, appContext);
        }
    }
    else {
        isAllowed = policyIsAllowed(policies, funcKey, policy, appContext);
    }
    if (typeof children === 'function') {
        return children(isAllowed);
    }
    if (!isAllowed) {
        return null;
    }
    return children;
}
exports.default = react_context_service_1.withContext('policies')(AccessControl);
