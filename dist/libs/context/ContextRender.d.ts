import * as React from 'react';
import { WithContextProps } from './Types';
interface ContextRenderProps<C> {
    keys: Array<keyof C>;
    children: (x: WithContextProps<C>) => React.ReactNode;
}
export declare class ContextRender<C> extends React.PureComponent<ContextRenderProps<C>> {
    render(): JSX.Element;
    renderConsumer: (context: any) => React.ReactNode;
}
export {};
