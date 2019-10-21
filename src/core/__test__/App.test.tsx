jest.mock('sideContext');

import * as React from 'react';
import TestRenderer from 'react-test-renderer';

import { Root } from '../Root';
import { getDefaultInitContext } from '../../app';

const { sideContext } = require('sideContext');

const initAppContext = getDefaultInitContext();

describe('containers/App', () => {
    describe('instance', () => {
        const renderApp = jest.fn(() => null);

        const appInitProps = {
            initialContext: initAppContext,
            bootstrappers: [],
            renderApp: renderApp,
            sideContexts: [sideContext]
        };

        const testRenderer = TestRenderer.create(
            <Root {...appInitProps} />
        );

        afterEach(() => {
            renderApp.mockClear();
        });

        it('should renderApp called', () => {
            expect(renderApp).toBeCalledTimes(1);
            expect(renderApp).toBeCalledWith(initAppContext);
        });

        it('should mount sideContext', () => {
            expect(testRenderer.root.findAllByType(sideContext.mount)).toBeTruthy();
        });
    });

    describe('Render into DOM node', () => {
        const appRoot = document.createElement('div');
        const renderApp = jest.fn(() => null);

        afterEach(() => {
            renderApp.mockClear();
        });

        it('should render into given div', async () => {
            await Root.render(
                appRoot,
                {
                    initialContext: initAppContext,
                    bootstrappers: [],
                    renderApp: renderApp,
                    sideContexts: []
                }
            );

            expect(renderApp).toBeCalledTimes(1);
            expect(renderApp).toBeCalledWith(initAppContext);
        });
    });
});