export type Middleware<T> = (context: T, next: (init: Partial<T>) => void) => void | Promise<void>;

export const runMiddlewares = async <T>(
  initContext: Partial<T>,
  middlewares: Middleware<Partial<T>>[]
): Promise<T> => {

  if (!middlewares.length) {
    return initContext as T;
  }

  return new Promise(async (resolve) => {
    let middlewareIndex = 0;

    const next = async (nextContext: T) => {
      middlewareIndex += 1;
      if (!middlewares[middlewareIndex]) {
        resolve(nextContext);

        return;
      }

      await middlewares[middlewareIndex](nextContext, next);
    };

    await middlewares[middlewareIndex](initContext, next);
  });
};
