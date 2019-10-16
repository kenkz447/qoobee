import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { RouteInfo } from '../Types';
import { Root } from './Root';

export class View<P extends RouteComponentProps, S = {}> extends React.PureComponent<P, S> {

    public static readonly contextType = Root.contextType;

    public  get title() {
        const InheritPage = Object.getPrototypeOf(this).constructor;
        if (!InheritPage.hasOwnProperty('routeInfo')) {
            return 'Untitle page';
        }
        const routeInfo = InheritPage.routeInfo as RouteInfo;
        return typeof routeInfo.title === 'string' ? routeInfo.title : routeInfo.title(this.props, this.state);
    }

    public constructor(props: P) {
        super(props);
        this.setDocumentTitle();
    }

    public readonly setDocumentTitle = () => {
        document.title = this.title;
    }

    public componentDidUpdate() {
        this.setDocumentTitle();
    }
}