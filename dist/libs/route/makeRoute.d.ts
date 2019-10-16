import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { RouteInfo } from '../../Types';
declare type ViewStruct = {
    readonly routeInfo: RouteInfo;
};
declare type AppRouteComponentProps = RouteComponentProps;
export declare type AppRouteComponent = React.ComponentType<AppRouteComponentProps> & ViewStruct;
export declare const makeRoute: (Component: AppRouteComponent) => JSX.Element;
export {};
