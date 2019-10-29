import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { RouteInfo } from '../Types';

import { rootContextType } from '../app';

export class Page<P extends RouteComponentProps, S = {}> extends React.PureComponent<P, S> {

    public static readonly routeInfo: RouteInfo;
    
    public static readonly contextType = rootContextType;

    public get title() {
        const InheritedPage = Object.getPrototypeOf(this).constructor;

        if (!InheritedPage.hasOwnProperty('routeInfo')) {
            return 'Untitle page';
        }

        const routeInfo = InheritedPage.routeInfo as RouteInfo;
        const title = typeof routeInfo.title === 'string' 
            ? routeInfo.title 
            : routeInfo.title(this.props, this.state);
        
        return title;
    }

    public readonly setDocumentTitle = () => {
        document.title = this.title;
    }

    public constructor(props: P) {
        super(props);
        this.setDocumentTitle();
    }

    public componentDidUpdate() {
        this.setDocumentTitle();
    }
}