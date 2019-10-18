import { Root } from '../Root';
import { getDefaultInitContext } from '../../app';

const initAppContext = getDefaultInitContext();

describe('containers/App', () => {
    const appRoot = document.createElement('div');
    const renderFn = jest.fn(() => null);

    it('should render correctly', async () => {
        await Root.render(
            appRoot,
            {
                initialContext: initAppContext,
                bootstrappers: [],
                renderApp: renderFn
            }
        );

        expect(renderFn).toBeCalledWith(
            initAppContext
        );
    });
});