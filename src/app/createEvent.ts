import { events } from './events';

export type UnListenEvent = () => void;

export interface Event<T> {
    readonly name: string | symbol;
    readonly emit: (payload: T) => void;
    readonly listen: (callback: (payload: T) => void) => UnListenEvent;
}

export const createEvent = <T>(name: string | symbol): Event<T> => {
    return {
        name: name,
        emit: (payload) => {
            events.emit(name, payload);
        },
        listen: (callback) => {
            events.on(name, callback);
            return () => {
                events.removeListener(name, callback);
            };
        }
    };
};