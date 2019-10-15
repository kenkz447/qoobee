
import * as React from 'react';
import { ContextFactory } from './ContextFactory';
import { WithContextProps } from './Types';

interface ContextRenderProps<C> {
    keys: Array<keyof C>;
    children: (x: WithContextProps<C>) => React.ReactNode;
}

export class ContextRender<C> extends React.PureComponent<ContextRenderProps<C>> {
    render() {
        const { Context } = ContextFactory.instance;
        return (
            <Context.Consumer>
                {this.renderConsumer}
            </Context.Consumer>
        );
    }

    renderConsumer = (context) => {
        const { children, keys } = this.props;
        const contextToProps = keys.reduce(
            (childContext, childContextKey) => {
                return {
                    ...childContext,
                    [childContextKey]: context[childContextKey]
                };
            },
            {
                setContext: context.setContext,
                getContext: context.getContext
            }
        ) as WithContextProps<C>;

        return children(contextToProps);
    }
}