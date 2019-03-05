import * as React from 'react';
import { withContext, WithContextProps } from 'react-context-service';

import { AppCoreContext, BreakPoint } from '../app';

export interface BreakpointDetectorProps {
    readonly resolver?: (windowWidth: number) => BreakPoint;
}

class BreakpointDetector extends React.PureComponent<WithContextProps<AppCoreContext, BreakpointDetectorProps>> {
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
        this.onWindowResize();
    }

    readonly onWindowResize = () => {
        const { resolver, setContext } = this.props;
        const nextBreakpoint = resolver!(window.innerWidth);

        setContext({
            currentBreakpoint: nextBreakpoint
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.onWindowResize);
    }

    render() {
        return this.props.children || null;
    }
}

export default withContext<AppCoreContext, BreakpointDetectorProps>()(BreakpointDetector);