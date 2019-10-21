import { History } from 'history';
import { WithContextProps } from './libs';
import { Event } from './app';
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare type Policy = (context: {}, funcKey?: string, values?: {}) => boolean;
export declare type BreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export interface SideContext<C = {}> {
    readonly name: string;
    readonly contextType: React.Context<C>;
    readonly mount: React.ComponentType<WithContextProps<C>>;
    readonly event?: Event<C>;
}
export interface MenuItem {
    readonly url: string;
    readonly icon?: string;
    readonly label: string;
}
export interface AppCoreContext<U = {}> {
    readonly currentUser: U | null;
    readonly currentRole: Role | null;
    readonly history: History;
    readonly policies: {
        readonly [key: string]: Policy;
    };
    readonly currentBreakpoint: BreakPoint;
    readonly currentLanguage: string;
    readonly menus: {
        readonly [key: string]: MenuItem[];
    };
    readonly paths: {
        readonly [key: string]: string;
    };
}
export interface RouteInfo<P = {}, S = {}> {
    readonly path: string;
    readonly title: string | ((props: P, state: S) => string);
    readonly icon?: JSX.Element;
    readonly policies?: string[] | Policy[];
    readonly isActive?: () => boolean;
    readonly exact?: boolean;
}
export interface Menu<P = {}> {
    readonly isRoot?: boolean;
    readonly label?: JSX.Element | string;
    readonly href?: string;
    readonly children?: Menu[];
    readonly component: React.ComponentType<P>;
    readonly componentProps?: P;
}
export interface Permission {
    readonly key: string;
    readonly url?: RegExp;
}
export interface Role {
    readonly key: string;
    readonly defaultUrl?: string;
    readonly allowed: Permission[];
    readonly denied?: Permission[];
    readonly redirects?: Array<{
        readonly test: RegExp;
        readonly target: string;
    }>;
}
