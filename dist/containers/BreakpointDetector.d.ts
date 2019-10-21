import * as React from 'react';
import { AppCoreContext, BreakPoint } from '../Types';
import { WithContextProps } from '../libs';
export interface BreakpointDetectorProps {
    readonly resolver?: (windowWidth: number) => BreakPoint;
}
export declare class BreakpointDetector extends React.PureComponent<BreakpointDetectorProps> {
    static readonly contextType: React.Context<AppCoreContext<{}>>;
    static readonly defaultProps: Partial<BreakpointDetectorProps>;
    constructor(props: WithContextProps<AppCoreContext, BreakpointDetectorProps>);
    readonly onWindowResize: () => void;
    componentDidMount(): void;
    render(): null;
}
