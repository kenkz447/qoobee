import * as React from 'react';
import { WithContextProps } from './Types';
import { Event } from '../../app';
export interface ContextFactoryProps<C> {
    readonly initContextValue?: C;
    readonly contextType: React.Context<C>;
    readonly children?: React.ReactNode | React.Component<WithContextProps<C>>;
    readonly event?: Event<C>;
}
export declare function ContextFactory<C = {}>(props: ContextFactoryProps<C>): JSX.Element;
