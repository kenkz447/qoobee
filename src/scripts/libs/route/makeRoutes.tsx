import { makeRoute, AppRouteComponent } from './makeRoute';

export const makeRoutes = (Components: AppRouteComponent[]) => Components.map((Component) => {
    return makeRoute(Component);
});