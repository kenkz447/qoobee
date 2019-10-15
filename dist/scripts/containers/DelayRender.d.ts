import * as React from 'react';
interface IDelayRenderProps {
    readonly timeout: number;
}
interface IDelayRenderState {
    readonly canRender: boolean;
}
export declare class DelayRender extends React.PureComponent<IDelayRenderProps, IDelayRenderState> {
    readonly state: {
        canRender: boolean;
    };
    componentWillMount(): void;
    render(): {} | null | undefined;
}
export {};
