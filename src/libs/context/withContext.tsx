import * as React from 'react';

import { WithContextProps } from './Types';
import { ContextFactory } from './ContextFactory';
import { InjectedWrapper } from './ContextInjectWrapper';

export function withContext<C = {}, P = {}>(...keys: Array<keyof C>) {
    return function <CP extends React.ComponentType<P & WithContextProps<C, P>>>(Component: CP) {
        const getContextToProps = (context: C & WithContextProps) => {
            const contextToProps: Partial<C & WithContextProps> = {};

            if (keys) {
                // Add context request by keys
                for (const contextKey of keys) {
                    contextToProps[contextKey] = context[contextKey];
                }
            }

            // Add required context
            contextToProps.setContext = context.setContext;
            contextToProps.getContext = context.getContext;

            return contextToProps;
        };

        return class Injector extends React.PureComponent<P> {
            render() {
                const { Context } = ContextFactory.instance;

                return (
                    <Context.Consumer>
                        {this.renderConsumer}
                    </Context.Consumer>
                );
            }

            renderConsumer = (context) => {
                const contextToProps = getContextToProps(context);

                const componentPropsWithContext = Object.assign(
                    contextToProps,
                    this.props
                ) as P & WithContextProps;

                return <InjectedWrapper Component={Component} {...componentPropsWithContext} />;
            }
        };
    };
}