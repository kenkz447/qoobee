import * as React from 'react';

import { AppCoreContext, Policy, PolityResult } from '../Types';
import { rootContextType } from '../app';

interface AccessControlRenderProps {
    allowed: boolean;
    redirectUrl: string | false | undefined;
}

interface AccessControlProps {
    readonly funcKey?: string;
    readonly policy: Array<Policy | string> | Policy | string;
    readonly children: (props: AccessControlRenderProps) => React.ReactNode;
    readonly values?: any;
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
            policies
        } = this.context;

        const {
            funcKey,
            policy,
            children,
            values
        } = this.props;

        const appContext = this.context;

        const defaultPolicyResult: PolityResult = true;
        let polityResult: PolityResult = defaultPolicyResult;

        if (Array.isArray(policy)) {
            for (const policyName of policy) {
                polityResult = policyIsAllowed(policies, funcKey, policyName, values, appContext);
                if (polityResult !== defaultPolicyResult) {
                    break;
                }
            }
        } else {
            polityResult = policyIsAllowed(policies, funcKey, policy, values, appContext);
        }

        return children({
            allowed: polityResult === true,
            redirectUrl: polityResult !== true ? polityResult : false
        });
    }
}