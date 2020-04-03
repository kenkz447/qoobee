import * as React from 'react';
import { AppCoreContext, Policy } from '../Types';
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
export declare class AccessControl extends React.PureComponent<AccessControlProps> {
    static readonly contextType: React.Context<AppCoreContext<{}>>;
    render(): React.ReactNode;
}
export {};
