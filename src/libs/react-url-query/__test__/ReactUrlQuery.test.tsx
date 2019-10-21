import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { RouteComponentProps } from 'react-router';

import { history } from '../../../app';
import { ReactUrlQuery } from '../ReactUrlQuery';

interface HomePageState {
    paramExist?: string;
    paramNotExist?: string;
    paramExistWithDefault?: string;
    paramNotExistWithDefault?: string;
    getParamNotExist?: string;
    getParamExist?: string;
    staticValue: string;
}

const originHistoryPush = history.push;

history.push = (path) => {
    const realLocation = window.location;
    const nextLocation = new URL(`http://localhost:3000${path}`);

    window.location = {
        ...realLocation,
        ...nextLocation
    };

    originHistoryPush(path);
};

describe('ReactUrlQuery', () => {
    const initSearchQuery = `?paramExist=true&paramExistWithDefault=true&getParamExist=true`;
    history.push(initSearchQuery);

    const homeRenderer = jest.fn(() => null);
    let prevHomeState: HomePageState;

    class HomePage extends React.Component<{}, HomePageState> {
        public readonly urlQuery = new ReactUrlQuery(this);

        constructor(props: RouteComponentProps) {
            super(props);
            
            this.state = {
                paramExist: this.urlQuery.sync('paramExist'),
                paramNotExist: this.urlQuery.sync('paramNotExist'),
                paramExistWithDefault: this.urlQuery.sync('paramExistWithDefault', 'undefined'),
                paramNotExistWithDefault: this.urlQuery.sync('paramNotExistWithDefault', 'false'),
                getParamNotExist: this.urlQuery.get('getParamNotExist'),
                getParamExist: this.urlQuery.get('getParamExist'),
                staticValue: 'this will never change!'
            };
        }

        public render() {
            return homeRenderer();
        }
    }

    const testRenderer = TestRenderer.create(<HomePage />);

    const testInstance = testRenderer.root;
    const homePageInsance =
        testInstance.findByType(HomePage).instance as HomePage;

    beforeEach(() => {
        jest.clearAllMocks();
        prevHomeState = homePageInsance.state;
    });

    it('should pageBag working correctly', () => {
        expect(homePageInsance.state)
            .toEqual({
                ...prevHomeState,
                paramExist: 'true',
                paramExistWithDefault: 'true',
                paramNotExistWithDefault: 'false',
                getParamExist: 'true'
            } as HomePageState);

        expect(location.search).toEqual(initSearchQuery);
    });

    it('should update state when url changed', () => {
        const nextQuery = `?paramNotExist=true`;
        history.push(nextQuery);

        expect(homeRenderer).toBeCalledTimes(1);
        expect(homePageInsance.state)
            .toEqual({
                ...prevHomeState,
                paramNotExist: 'true',
                paramExist: undefined,
                getParamNotExist: undefined,
                paramExistWithDefault: undefined,
                paramNotExistWithDefault: undefined
            } as HomePageState);
    });

    it('should update url search when setState called', () => {
        homePageInsance.setState({
            paramExist: 'changedToo',
            paramNotExist: 'helloSearch',
            getParamExist: undefined
        });

        expect(location.search).toEqual(`?paramExist=changedToo&paramNotExist=helloSearch`);
        expect(homePageInsance.state)
            .toEqual({
                ...prevHomeState,
                paramExist: 'changedToo',
                paramNotExist: 'helloSearch',
                getParamExist: undefined
            } as HomePageState);
        expect(homeRenderer).toBeCalledTimes(1);
    });

    it('should not update url search when non sync state change', () => {
        homePageInsance.setState({
            staticValue: '... it was changed'
        });

        expect(location.search).toEqual(`?paramExist=changedToo&paramNotExist=helloSearch`);
        expect(homePageInsance.state)
            .toEqual({
                ...prevHomeState,
                staticValue: '... it was changed'
            } as HomePageState);
        expect(homeRenderer).toBeCalledTimes(1);
    });
});