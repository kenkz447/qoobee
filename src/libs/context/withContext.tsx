import * as React from 'react';

import { WithContextProps } from './Types';
import { InjectedWrapper } from './ContextInjectWrapper';

export function withContext<C = {}, CO extends C = C>(Context: React.Context<CO>, ...keys: Array<keyof CO>) {
    // tslint:disable-next-line:max-line-length
    return function <P, CP extends React.ComponentType<P & WithContextProps<C, P>> = React.ComponentType<P & WithContextProps<C, P>>>(
        Component: CP
    ) {
        type ContextValue = WithContextProps<CO, P>;

        const getContextToProps = (contextValue: ContextValue) => {
            if (!keys.length) {
                return contextValue;
            }

            let contextToProps: Partial<ContextValue> = {};

            for (const contextKey of keys) {
                contextToProps[contextKey] = contextValue[contextKey];
            }

            contextToProps.setContext = contextValue.setContext;
            contextToProps.getContext = contextValue.getContext;

            return contextToProps;
        };

        return class ContextInjector extends React.PureComponent<P> {
            public readonly renderConsumer = (contextValue: ContextValue) => {
                const contextToProps = getContextToProps(contextValue);

                const componentPropsWithContext = Object.assign(
                    contextToProps,
                    this.props
                ) as P & WithContextProps;

                return <InjectedWrapper Component={Component} {...componentPropsWithContext} />;
            }

            public render() {
                return (
                    <Context.Consumer>
                        {this.renderConsumer}
                    </Context.Consumer>
                );
            }
        };
    };
}