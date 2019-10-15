import * as React from 'react';

import { WithContextProps } from './Types';

type InjectedWrapperProps<P> = { Component: React.ComponentType<WithContextProps<any, P>> };

export class InjectedWrapper<P> extends React.PureComponent<InjectedWrapperProps<P> & WithContextProps> {
    render() {
        const { Component, ...props } = this.props;

        return (
            <Component {...props as WithContextProps<any, P>} />
        );
    }
}
