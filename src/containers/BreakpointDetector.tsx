import * as React from 'react';

import { AppCoreContext, BreakPoint } from '../Types';
import { WithContextProps } from '../libs';
import { rootContextType } from '../app';

export interface BreakpointDetectorProps {
    readonly resolver?: (windowWidth: number) => BreakPoint;
}

export class BreakpointDetector extends React.PureComponent<BreakpointDetectorProps> {
    public static readonly contextType = rootContextType;

    static readonly defaultProps: Partial<BreakpointDetectorProps> = {
        resolver: (windowWith: number) => {
            if (windowWith >= 1200) {
                return 'lg';
            }

            if (windowWith >= 992) {
                return 'md';
            }

            return 'sm';
        }
    };

    constructor(props: WithContextProps<AppCoreContext, BreakpointDetectorProps>) {
        super(props);
    }

    readonly onWindowResize = () => {
        const { setContext } = this.context;
        const { resolver } = this.props;
        const nextBreakpoint = resolver!(window.innerWidth);

        setContext({
            currentBreakpoint: nextBreakpoint
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.onWindowResize);
    }

    render() {
        return null;
    }
}