// tslint:disable:no-string-literal

import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { RouteComponentProps } from 'react-router';

import { history } from '../../../app';
import { ReactUrlQuery } from '../ReactUrlQuery';

interface HomePageState {
    paramExist?: string;
    paramNotExist?: string;
    paramExistWithDefault?: string;
    paramNotExistWithDefault?: boolean;
    getParamNotExist?: string;
    getParamExist?: string;
    staticValue: string;
    paramArray: string[];
    paramArrayNoDefault: string[];
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
    const initSearchQuery = `?paramArray=abc&paramArrayNoDefault=bcd&paramExist=true&paramExistWithDefault=true&getParamExist=true`;
    history.push(initSearchQuery);

    const homeRenderer = jest.fn(() => null);
    let prevHomeState: HomePageState;

    class HomePage extends React.PureComponent<{}, HomePageState> {
        public readonly urlQuery = new ReactUrlQuery(this);

        constructor(props: RouteComponentProps) {
            super(props);

            this.state = {
                paramArray: this.urlQuery.syncWithUrl('paramArray', []),
                paramArrayNoDefault: this.urlQuery.syncWithUrl('paramArrayNoDefault'),

                paramExist: this.urlQuery.syncWithUrl('paramExist'),
                paramNotExist: this.urlQuery.syncWithUrl('paramNotExist'),
                paramExistWithDefault: this.urlQuery.syncWithUrl('paramExistWithDefault', undefined),
                paramNotExistWithDefault: this.urlQuery.syncWithUrl('paramNotExistWithDefault', false),
                getParamNotExist: this.urlQuery.getFromUrl('getParamNotExist'),
                getParamExist: this.urlQuery.getFromUrl('getParamExist'),
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
        expect(homePageInsance.urlQuery.current).toEqual({
            paramArray: ['abc'],
            paramArrayNoDefault: 'bcd',
            paramExist: 'true',
            paramExistWithDefault: 'true',
            paramNotExist: undefined,
            paramNotExistWithDefault: false,
        });

        expect(location.search).toEqual(initSearchQuery);
    });

    it('should update or reset to default state when url changed', () => {
        const nextQuery = `?paramNotExist=true`;
        history.push(nextQuery);

        expect(homeRenderer).toBeCalledTimes(1);
        expect(homePageInsance.state)
            .toEqual({
                ...prevHomeState,
                ...homePageInsance.urlQuery.defaultValues,
                paramNotExist: 'true'
            } as HomePageState);
    });

    it('should update url search when setState called', () => {
        homePageInsance.setState({
            paramArray: ['p1'],
            paramExist: 'changedToo',
            paramNotExist: 'helloSearch',
            getParamExist: undefined
        });

        expect(location.search).toEqual('?paramArray=p1&paramExist=changedToo&paramNotExist=helloSearch');
        expect(homePageInsance.state)
            .toEqual({
                ...prevHomeState,
                paramArray: ['p1'],
                paramExist: 'changedToo',
                paramNotExist: 'helloSearch',
                getParamExist: undefined,
            } as HomePageState);
        expect(homeRenderer).toBeCalledTimes(1);
    });

    it('should not update url search when non sync state change', () => {
        homePageInsance.setState({
            staticValue: '... it was changed'
        });

        expect(location.search).toEqual('?paramArray=p1&paramExist=changedToo&paramNotExist=helloSearch');
        expect(homePageInsance.state)
            .toEqual({
                ...prevHomeState,
                staticValue: '... it was changed'
            } as HomePageState);
        expect(homeRenderer).toBeCalledTimes(1);
    });

    it('should unregistered query params not be remove after update state', () => {
        const nextSearchQuery = location.search + `&unregister=1`;
        history.push(nextSearchQuery);

        homePageInsance.setState({
            ...prevHomeState,
            paramExist: '0'
        });

        expect(location.search).toEqual('?unregister=1&paramArray=p1&paramExist=0&paramNotExist=helloSearch');
    });

    it('should unlisten when component unmounting', () => {
        homePageInsance.urlQuery['_unListener'] = jest.fn(homePageInsance.urlQuery['_unListener']);

        testRenderer.unmount();

        expect(homePageInsance.urlQuery['_unmounting'])
            .toEqual(true);

        expect(homePageInsance.urlQuery['_unListener'])
            .toBeCalled();
    });
});