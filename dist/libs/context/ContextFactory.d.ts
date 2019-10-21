import * as React from 'react';
import { WithContextProps } from './Types';
export declare type ContextFactoryProps<T> = {
    initContextValue?: T;
    contextType: React.Context<T>;
    children?: React.ReactNode | React.Component<WithContextProps<T>>;
};
export declare function ContextFactory<C = {}>(props: ContextFactoryProps<C>): JSX.Element;
