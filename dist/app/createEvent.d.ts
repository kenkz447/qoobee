export declare type UnListenEvent = () => void;
export interface Event<T> {
    readonly name: string | symbol;
    readonly emit: (payload: T) => void;
    readonly listen: (callback: (payload: T) => void) => UnListenEvent;
}
export declare const createEvent: <T>(name: string | symbol) => Event<T>;
