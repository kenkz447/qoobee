import { withContext, WithContextProps } from 'react-context-service';

import { AppCoreContext, Policy } from '../app';

interface AccessControlProps {
    readonly funcKey?: string;
    readonly policy: Array<Policy | string> | Policy | string;
    readonly children: React.ReactNode | (() => React.ReactNode);
    readonly values?: any;
    readonly renderDeny?: () => React.ComponentType;
}

type WithPolicies = Pick<AppCoreContext, 'policies'>;

function policyIsAllowed(
    policies: WithPolicies['policies'],
    funcKey: string | undefined,
    policy: string | Policy,
    appContext: {}
) {
    if (typeof policy === 'function') {
        return policy(appContext, funcKey);
    }

    return policies![policy] ? policies![policy](appContext, funcKey) : false;
}

function AccessControl(props: WithContextProps<WithPolicies, AccessControlProps>) {
    const {
        funcKey,
        policy,
        children,
        policies,
        getContext,
        renderDeny
    } = props;

    if (!policies) {
        if (typeof renderDeny === 'function') {
            return renderDeny();
        }

        return null;
    }

    const appContext = getContext();

    let isAllowed: boolean = true;
    if (Array.isArray(policy)) {
        for (const policyName of policy) {
            isAllowed = policyIsAllowed(policies, funcKey, policyName, appContext);
        }
    } else {
        isAllowed = policyIsAllowed(policies, funcKey, policy, appContext);
    }

    if (!isAllowed) {
        if (typeof renderDeny === 'function') {
            return renderDeny();
        }

        return null;
    }

    return typeof children === 'function' ? children() : children;
}

export default withContext<AppCoreContext, AccessControlProps>('policies')(AccessControl);