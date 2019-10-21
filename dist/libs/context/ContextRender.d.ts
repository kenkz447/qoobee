import * as React from 'react';
import { WithContextProps } from './Types';
declare type ContextRenderProps<C, K extends keyof C = keyof C> = {
    children: (pick: WithContextProps<Pick<C, K>>) => React.ReactNode;
    contextType: React.Context<C>;
    keys?: Array<K>;
};
export declare class ContextRender<C> extends React.Component<ContextRenderProps<C>> {
    private readonly renderConsumer;
    render(): JSX.Element;
}
export {};
