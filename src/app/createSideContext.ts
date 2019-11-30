import { createEvent } from './createEvent';
import { SideContext } from '../Types';
import * as React from 'react';

export const createSideContext = <C = {}>(
    props: Partial<SideContext<C>> & Pick<SideContext<C>, 'name'> & Pick<SideContext<C>, 'mount'>
): SideContext<C> => {

    const event = props.event || createEvent(props.name);
    const contextType = props.contextType || React.createContext<C>({} as C);

    return {
        ...props,
        event,
        contextType,
        setValue: event.emit
    };
};