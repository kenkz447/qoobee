import * as React from 'react';
import { WithContextProps, ListenContextCallback } from './Types';

interface ContextProviderProps<T> {
    initContextValue: T;
    contextType: React.Context<T>;
}

type ContextProviderState<C> = C & Required<WithContextProps>;

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
        const { contextType } = this.props;

        return (
            <contextType.Provider value={this.state}>
                {this.props.children}
            </contextType.Provider>
        );
    }
}