import * as React from 'react';
import { WithContextProps, ListenContextCallback } from './Types';

interface ContextProviderProps<C> {
    initContextValue: C;
    contextType: React.Context<C>;
    children: React.ReactNode | React.ComponentType<WithContextProps<C>>;
}

type ContextProviderState<C> = Required<WithContextProps<C>>;

export class ContextProvider<C> extends React.Component<ContextProviderProps<C>, ContextProviderState<C>> {
    private readonly setContextProxy = (source, newContext) => {
        const newContextKey = Object.keys(newContext);
        const oldContext = this.getContext(newContextKey);

        const setContextCallback = (() => {
            //
        });

        this.setState(newContext, setContextCallback);
    }

    private readonly getContext = (...contextKeys) => {
        if (!contextKeys || !contextKeys.length) {
            return Object.seal(this.state);
        }

        return contextKeys.reduce(
            (gettedContext, currentKey) => {
                gettedContext[currentKey] = (this.state as any)[currentKey];
                return gettedContext;
            },
            {}
        );
    }

    constructor(props: ContextProviderProps<C>) {
        super(props);

        const { initContextValue } = props;
        const { setContextProxy, getContext } = this;

        this.state = {
            ...initContextValue,
            setContext(context: any) {
                setContextProxy(this, context);
            },
            getContext: getContext
        };
    }

    public render() {
        const { contextType, children } = this.props;

        return (
            <contextType.Provider value={this.state}>
                {
                    typeof children === 'function'
                        ? React.createElement(children as React.ComponentType<C>, this.state)
                        : children
                }
            </contextType.Provider>
        );
    }
}