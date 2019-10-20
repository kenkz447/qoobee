import * as React from 'react';
import TestRenderer from 'react-test-renderer';

import { Page } from '../Page';
import { Router, Route, RouteComponentProps } from 'react-router';
import { history } from '../../app';

describe('insance', () => {
    const children = jest.fn(() => null);

    class HomePage extends Page<RouteComponentProps> {
        public render() {
            return children();
        }
    }

    TestRenderer.create(
        <Router history={history}>
            <Route to="/home" component={HomePage} />
        </Router>
    );

    it('should render without any errors', () => {
        expect(children).toBeCalled();
    });
});