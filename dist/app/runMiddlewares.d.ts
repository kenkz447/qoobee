export declare type Middleware<T> = (context: T, next: (init: Partial<T>) => void) => void | Promise<void>;
export declare const runMiddlewares: <T>(initContext: Partial<T>, middlewares: Middleware<Partial<T>>[]) => Promise<T>;
