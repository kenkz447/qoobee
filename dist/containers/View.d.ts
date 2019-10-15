import * as React from 'react';
import { RouteComponentProps } from 'react-router';
export declare class View<P extends RouteComponentProps, S = {}> extends React.PureComponent<P, S> {
    static readonly contextType: React.Context<{}>;
    readonly title: string;
    constructor(props: P);
    readonly setDocumentTitle: () => void;
    componentDidUpdate(): void;
}
