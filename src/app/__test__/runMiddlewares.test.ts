// tslint:disable

import { runMiddlewares, Middleware } from '../runMiddlewares';
import { wait } from '../../libs';

interface ITestObject {
  readonly bar?: boolean;
  readonly foo?: boolean;
  readonly init: boolean;
}

describe('runMiddlewares', () => {
  const fooValue = { foo: true };
  const barValue = { bar: true };

  const fooMiddleware: Middleware<ITestObject> = async (initContext, next) => {
    await wait(1000);
    next({ ...initContext, ...fooValue });
  };

  const barMiddleware: Middleware<ITestObject> = (initContext, next) => {
    next({ ...initContext, ...barValue });
  };

  const middlewares = [fooMiddleware, barMiddleware];

  it('should merge objects', async () => {
    const initContext = {
      init: true
    };

    const final = await runMiddlewares<ITestObject>(initContext, middlewares);

    expect(final)
      .toEqual({
        ...initContext,
        ...fooValue,
        ...barValue
      });
  });
});
