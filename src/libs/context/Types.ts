export type SetContext<T> = (context: Partial<T>) => void;
export type GetContext<P> = (...key: Array<keyof P>) => Pick<P, keyof P>;

export type ListenContextCallback = (...contextKeys: string[]) => void;

export type WithContextProps<T = {}, OwnProps = {}> = T & OwnProps & {
    setContext: SetContext<T>;
    getContext: GetContext<T>;
    listenContext: (callback: ListenContextCallback) => void;
};