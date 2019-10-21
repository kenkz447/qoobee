import * as React from 'react';
import { AppCoreContext, Policy } from '../Types';
interface AccessControlProps {
    readonly funcKey?: string;
    readonly policy: Array<Policy | string> | Policy | string;
    readonly children: React.ReactNode | (() => React.ReactNode);
    readonly values?: any;
    readonly renderDeny?: () => React.ReactNode;
}
export declare class AccessControl extends React.PureComponent<AccessControlProps> {
    static readonly contextType: React.Context<AppCoreContext<{}>>;
    render(): {} | null | undefined;
}
export {};
