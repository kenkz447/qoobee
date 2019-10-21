import * as React from 'react';
import { WithContextProps } from './Types';
interface ContextRenderProps<C> {
    contextType: React.Context<C>;
    keys: Array<keyof C>;
    children: (x: WithContextProps<C>) => React.ReactNode;
}
export declare class ContextRender<C> extends React.PureComponent<ContextRenderProps<C>> {
    private readonly renderConsumer;
    render(): JSX.Element;
}
export {};
