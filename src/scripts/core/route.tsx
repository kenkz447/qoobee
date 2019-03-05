import * as React from 'react';
import { withContext, WithContextProps } from 'react-context-service';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';

import AccessControl from '../containers/AccessControl';
import { AppCoreContext, RouteInfo } from './Types';

type PageContructor<P = {}> = {
    readonly withContext?: Array<string>;
    readonly routeInfo: RouteInfo;
    readonly getPageKey?: (props: P) => string | number | undefined;
};

type AppRouteComponentProps = WithContextProps<AppCoreContext, RouteComponentProps>;
type AppRouteComponent = React.ComponentType<AppRouteComponentProps> & PageContructor<AppRouteComponentProps>;

export const route = (Component: AppRouteComponent) => {
    if (!Component.routeInfo) {
        throw Error('Default Props with routeProps needed in Route Component!');
    }

    const routeProps = Component.routeInfo;
    const initialContext = Component.withContext || [];

    // tslint:disable-next-line:no-any
    const WithContextInject = withContext(...initialContext)((props: any) => {
        const pageKey = Component.getPageKey && Component.getPageKey(props);
        return (
            <Component
                key={pageKey}
                {...props}
            />
        );
    });

    if (routeProps.policies) {
        return (
            <Route key={routeProps.path} {...routeProps}>
                {(componentProps) => {
                    return (
                        <AccessControl policy={routeProps.policies!}>
                            {(canAccess) => {
                                if (!canAccess) {
                                    return <Redirect to="/deny" />;
                                }
                                return <WithContextInject {...componentProps} />;
                            }}
                        </AccessControl>
                    );
                }}
            </Route>
        );
    }

    return (
        <Route key={routeProps.path} {...routeProps} component={WithContextInject} />
    );
};

export const routeFrom = (Components: AppRouteComponent[]) => Components.reduce(
    (currenValue: JSX.Element[], Component) => {
        return [...currenValue, route(Component)];
    },
    []
);