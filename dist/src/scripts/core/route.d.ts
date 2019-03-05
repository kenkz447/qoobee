import * as React from 'react';
import { WithContextProps } from 'react-context-service';
import { RouteComponentProps } from 'react-router-dom';
import { AppCoreContext, RouteInfo } from './Types';
declare type PageContructor<P = {}> = {
    readonly withContext?: Array<string>;
    readonly routeInfo: RouteInfo;
    readonly getPageKey?: (props: P) => string | number | undefined;
};
declare type AppRouteComponentProps = WithContextProps<AppCoreContext, RouteComponentProps>;
declare type AppRouteComponent = React.ComponentType<AppRouteComponentProps> & PageContructor<AppRouteComponentProps>;
export declare const route: (Component: AppRouteComponent) => JSX.Element;
export declare const routeFrom: (Components: AppRouteComponent[]) => JSX.Element[];
export {};
