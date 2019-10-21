
import * as React from 'react';
import { WithContextProps } from './Types';

interface ContextRenderProps<C> {
    contextType: React.Context<C>;
    keys: Array<keyof C>;
    children: (x: WithContextProps<C>) => React.ReactNode;
}

export class ContextRender<C> extends React.PureComponent<ContextRenderProps<C>> {
    private readonly renderConsumer = (contextValue) => {
        const { children, keys } = this.props;

        const contextToProps = keys.reduce(
            (childContext, childContextKey) => {
                return {
                    ...childContext,
                    [childContextKey]: contextValue[childContextKey]
                };
            },
            {
                setContext: contextValue.setContext,
                getContext: contextValue.getContext
            } as WithContextProps<C>
        );

        return children(contextToProps);
    }

    public render() {
        const { contextType } = this.props;

        return (
            <contextType.Consumer>
                {this.renderConsumer}
            </contextType.Consumer>
        );
    }
}