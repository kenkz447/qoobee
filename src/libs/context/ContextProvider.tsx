import * as React from 'react';
import { WithContextProps } from './Types';
import { Event, UnListenEvent } from '../../app';

interface ContextProviderProps<C> {
    initContextValue: C;
    contextType: React.Context<C>;
    children: React.ReactNode | React.ComponentType<WithContextProps<C>>;
    event?: Event<C>;
}

type ContextProviderState<C> = WithContextProps<C>;

export class ContextProvider<C> extends React.Component<ContextProviderProps<C>, ContextProviderState<C>> {
    private _unlistenEvent: UnListenEvent;

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
            setContext(context: C) {
                setContextProxy(this, context);
            },
            getContext: getContext
        };
    }

    public componentDidMount() {
        const { event } = this.props;

        if (event) {
            this._unlistenEvent = event.listen((payload) => {
                this.setState(payload as any);
            });
        }
    }

    public componentWillUnmount() {
        if (!this._unlistenEvent) {
            return;
        }

        this._unlistenEvent();
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