import { Root } from '../Root';

describe('containers/App', () => {
    const appRoot = document.createElement('div');
    const renderFn = jest.fn(() => null);

    it('should render correctly', () => {
        Root.render(
            appRoot,
            {
                initialContext: {},
                renderApp: renderFn
            }
        );

        expect(renderFn).toBeCalled();
    });
});