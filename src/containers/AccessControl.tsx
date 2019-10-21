import * as React from 'react';

import { AppCoreContext, Policy } from '../Types';
import { rootContextType } from '../app';

interface AccessControlProps {
    readonly funcKey?: string;
    readonly policy: Array<Policy | string> | Policy | string;
    readonly children: React.ReactNode | (() => React.ReactNode);
    readonly values?: any;
    readonly renderDeny?: () => React.ReactNode;
}

function policyIsAllowed(
    policies: Pick<AppCoreContext, 'policies'>,
    funcKey: string | undefined,
    policy: string | Policy,
    values: any,
    appContext: {}
) {
    if (typeof policy === 'function') {
        return policy(appContext, funcKey, values);
    }

    return policies![policy] ? policies![policy](appContext, funcKey) : false;
}

export class AccessControl extends React.PureComponent<AccessControlProps> {
    public static readonly contextType = rootContextType;
    public render() {
        const {
            policies,
            getContext 
        } = this.context;

        const {
            funcKey,
            policy,
            children,
            renderDeny,
            values
        } = this.props;

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
                isAllowed = policyIsAllowed(policies, funcKey, policyName, values, appContext);
            }
        } else {
            isAllowed = policyIsAllowed(policies, funcKey, policy, values, appContext);
        }

        if (!isAllowed) {
            if (typeof renderDeny === 'function') {
                return renderDeny();
            }

            return null;
        }

        return children instanceof Function ? children() : children;
    }
}