import * as React from 'react';
import TestRenderer from 'react-test-renderer';

import { WithContextProps } from '../Types';
import { withContext } from '../withContext';
import { ContextFactory } from '../ContextFactory';
import { ContextRender } from '../ContextRender';
import { ContextProvider } from '../ContextProvider';

interface AppContext {
    foo?: number;
    bar?: number;
}

interface BarComponentProps {
    barPrimayProps?: string;
}

interface FooComponentProps {
    fooPrimayProps?: string;
}

describe('Lib Context', () => {
    const initContextValue: AppContext = {
        foo: 1,
        bar: 2
    };

    const appContext = React.createContext(initContextValue);

    // #Foo Component
    const renderFoo = jest.fn((...props) => null);

    class FooComponent extends React.Component<WithContextProps<AppContext, FooComponentProps>> {
        render() {
            return renderFoo(this.props);
        }
    }

    const Foo = withContext(appContext, 'foo')<FooComponentProps>(FooComponent);

    // #Bar Component
    const renderBar = jest.fn((...props) => null);

    class BarComponent extends React.Component<WithContextProps<AppContext, BarComponentProps>> {
        render() {
            return renderBar(this.props);
        }
    }

    const Bar = withContext(appContext, 'bar')<BarComponentProps>(BarComponent);

    const renderBaz = jest.fn((...props) => null);

    class BazComponent extends React.Component<WithContextProps<AppContext, BarComponentProps>> {
        render() {
            return renderBaz(this.props);
        }
    }

    const Baz = withContext(appContext)<AppContext>(BazComponent);

    const contextRender = jest.fn((...props) => null);

    const AppRenderer = TestRenderer.create(
        <ContextFactory
            contextType={appContext}
            initContextValue={initContextValue}
        >
            <Foo />
            <Bar />
            <Baz />
            <ContextRender contextType={appContext} keys={['foo']}>
                {(props) => contextRender(props)}
            </ContextRender>
        </ContextFactory>
    );

    const AppRendererInstance = AppRenderer.getInstance();
    const ProviderTestInstance = AppRenderer.root.findByType(ContextProvider);

    const providerElement = ProviderTestInstance.instance as ContextProvider<AppContext>;
    const providerDefaultProps = {
        setContext: providerElement.state.setContext as WithContextProps<AppContext>['setContext'],
        getContext: providerElement.state.getContext as WithContextProps<AppContext>['getContext']
    };

    it('should render without errors', () => {
        expect(AppRendererInstance).toBeTruthy();
    });

    it('should Foo and Bar rendered with initial context', () => {
        const initialFooProps: AppContext = {
            foo: initContextValue.foo,
            ...providerDefaultProps
        };

        expect(renderFoo).toBeCalledWith(initialFooProps);

        const initialBarProps: AppContext = {
            bar: initContextValue.bar,
            ...providerDefaultProps
        };

        expect(renderBar).toBeCalledWith(initialBarProps);
        expect(renderBaz).toHaveBeenCalledWith({
            ...initContextValue,
            ...providerDefaultProps
        });
    });

    it('should get all initial context', () => {
        const initialContext = providerDefaultProps.getContext('bar', 'foo');
        expect(initialContext).toEqual(initContextValue);
    });

    it('should ContextRender rendered with init context and setContext parms', () => {
        expect(contextRender).toBeCalledWith({
            foo: initContextValue.foo,
            ...providerDefaultProps
        });
    });

    it('should "Foo" and "contextRender" re-render went foo value changed', () => {
        jest.clearAllMocks();

        providerElement.state.setContext({ foo: 2 });

        const nextFooValue = 2;

        const changedTextComponentProps: AppContext = {
            foo: nextFooValue,
            ...providerDefaultProps
        };

        expect(renderFoo).toBeCalledWith(changedTextComponentProps);
        expect(contextRender).toBeCalledWith(changedTextComponentProps);
    });

    it('should "Bar" not re-render went "num" context changed', () => {
        providerElement.state.setContext({ num: 2 });
        expect(renderBar).not.toBeCalled();
    });

    it('should get all changed context', () => {
        const initialContext = providerDefaultProps.getContext('foo');
        expect(initialContext).toEqual({
            foo: 2
        });
    });

    it('should Foo re-render went it own props changed', () => {
        jest.clearAllMocks();

        const nextFooPrimayProps = 'new-passed-props';

        AppRenderer.update(
            <ContextFactory
                contextType={appContext}
                initContextValue={initContextValue}
            >
                <Foo fooPrimayProps={nextFooPrimayProps} />
                <Bar />
            </ContextFactory>
        );

        const changedTextComponentProps: FooComponentProps & AppContext = {
            fooPrimayProps: nextFooPrimayProps,
            foo: 2,
            ...providerDefaultProps
        };

        expect(renderFoo).toBeCalledWith(changedTextComponentProps);
    });
});