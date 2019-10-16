import * as React from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';

import { RouteProps } from 'react-router';
import { AccessControl } from '../../containers';
import { RouteInfo } from '../../Types';

type ViewStruct = {
    readonly routeInfo: RouteInfo;
};

type AppRouteComponentProps = RouteComponentProps;

export type AppRouteComponent = React.ComponentType<AppRouteComponentProps> & ViewStruct;

export const makeRoute = (Component: AppRouteComponent) => {
    if (!Component.routeInfo) {
        throw Error('Default Props with routeProps needed in Route Component!');
    }

    const { routeInfo } = Component;

    const routeProps: Partial<RouteProps & { key: string }> = {
        key: routeInfo.path,
        path: routeInfo.path,
        exact: routeInfo.exact
    };

    if (routeInfo.policies) {
        return (
            <Route {...routeProps}>
                {(componentProps) => {
                    return (
                        <AccessControl
                            policy={routeInfo.policies!}
                            renderDeny={() => <Redirect to="/deny" />}
                        >
                            {() => <Component {...componentProps} />}
                        </AccessControl>
                    );
                }}
            </Route>
        );
    }

    return (
        <Route {...routeProps} component={Component} />
    );
};