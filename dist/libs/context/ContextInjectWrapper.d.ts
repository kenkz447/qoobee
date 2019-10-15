import * as React from 'react';
import { WithContextProps } from './Types';
declare type InjectedWrapperProps<P> = {
    Component: React.ComponentType<WithContextProps<any, P>>;
};
export declare class InjectedWrapper<P> extends React.PureComponent<InjectedWrapperProps<P> & WithContextProps> {
    render(): JSX.Element;
}
export {};
