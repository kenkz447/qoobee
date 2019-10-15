import * as React from 'react';
import { WithContextProps, ListenContextCallback } from './Types';
import { ContextFactory } from './ContextFactory';

interface ContextProviderProps {
    loggingEnabled?: boolean;
    initContextValue: {};
}

type ContextProviderState = Required<WithContextProps>;

export class ContextProvider extends React.Component<ContextProviderProps, ContextProviderState> {
    setContextProxy = (source, newContext) => {
        const { loggingEnabled } = this.props;
        const newContextKey = Object.keys(newContext);
        const oldContext = this.getContext(newContextKey);

        const setContextCallback = (() => {
            if (loggingEnabled) {
                this.log(source, newContext, oldContext);
            }
        });

        this.setState(newContext, setContextCallback);
    }

    getContext = (...contextKeys) => {
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

    log = (source, newContext, oldContext) => {
        console.group('Context was changed');
        console.log('By: ', source);
        console.log('From:', oldContext);
        console.log('To:', newContext);
        console.groupEnd();
    }

    constructor(props: ContextProviderProps) {
        super(props);

        const { initContextValue } = props;
        const { setContextProxy, getContext } = this;

        this.state = {
            ...initContextValue,
            setContext(context: any) {
                setContextProxy(this, context);
            },
            getContext: getContext,
            listenContext: this.listenContext
        };
    }

    listenContext = (callback: ListenContextCallback) => {
        
    }

    render() {
        const { Context } = ContextFactory.instance;

        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}