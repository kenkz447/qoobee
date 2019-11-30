import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { RouteInfo } from '../Types';
export declare class Page<P extends RouteComponentProps, S = {}> extends React.PureComponent<P, S> {
    static readonly routeInfo: RouteInfo;
    static readonly contextType: React.Context<import("../Types").AppCoreContext<{}>>;
    get title(): string;
    readonly setDocumentTitle: () => void;
    constructor(props: P);
    componentDidUpdate(): void;
}
