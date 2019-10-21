
import * as React from 'react';
import { WithContextProps } from './Types';

type ContextRenderProps<C, K extends keyof C = keyof C> = {
    children: (pick: WithContextProps<Pick<C, K>>) => React.ReactNode;
    contextType: React.Context<C>;
    keys?: Array<K>;
};

export class ContextRender<C> extends React.Component<ContextRenderProps<C>> {
    private readonly renderConsumer = (contextValue: WithContextProps<C>) => {
        const { children, keys } = this.props;

        if (!keys) {
            return children(contextValue);
        }

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