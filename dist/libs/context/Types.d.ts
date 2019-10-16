export declare type SetContext<T> = (context: Partial<T>) => void;
export declare type GetContext<P> = (...key: Array<keyof P>) => Pick<P, keyof P>;
export declare type ListenContextCallback = (...contextKeys: string[]) => void;
export declare type WithContextProps<T = {}, OwnProps = {}> = T & OwnProps & {
    setContext: SetContext<T>;
    getContext: GetContext<T>;
    listenContext: (callback: ListenContextCallback) => void;
};
