import * as React from 'react';
import { WithContextProps } from 'react-context-service';
import { RouteComponentProps } from 'react-router';
export declare class RoutePage<P extends RouteComponentProps, S = {}, C = {}> extends React.PureComponent<WithContextProps<C, P>, S> {
    readonly title: string;
    constructor(props: WithContextProps<C, P>);
    readonly setDocumentTitle: () => void;
    componentDidUpdate(): void;
}
