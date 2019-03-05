import * as React from 'react';
import { WithContextProps } from 'react-context-service';
import { RouteComponentProps } from 'react-router';

import { RouteInfo } from './Types';

export class RoutePage<P extends RouteComponentProps, S= {}, C = {}>
    extends React.PureComponent<WithContextProps<C, P>, S> {

    get title() {
        const InheritPage = Object.getPrototypeOf(this).constructor;
        if (!InheritPage.hasOwnProperty('routeInfo')) {
            return 'Untitle page';
        }
        const routeInfo = InheritPage.routeInfo as RouteInfo;
        return typeof routeInfo.title === 'string' ? routeInfo.title : routeInfo.title(this.props, this.state);
    }

    constructor(props: WithContextProps<C, P>) {
        super(props);
        this.setDocumentTitle();
    }

    readonly setDocumentTitle = () => {
        document.title = this.title;
    }

    public componentDidUpdate() {
        this.setDocumentTitle();
    }
}