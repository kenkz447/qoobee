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
    num?: number;
}

interface BarComponentProps {
    barPrimayProps?: string;
}

interface FooComponentProps {
    fooPrimayProps?: string;
}

describe('Lib Context', () => {
    describe('with given initial context value to factory', () => {
        const mainContextValue: AppContext = {
            foo: 1,
            bar: 2
        };

        const mainContext = React.createContext(mainContextValue);

        // #Foo Component
        const renderFoo = jest.fn((...props) => null);

        class FooComponent extends React.Component<WithContextProps<AppContext, FooComponentProps>> {
            render() {
                return renderFoo(this.props);
            }
        }

        const Foo = withContext(mainContext, 'foo')<FooComponentProps>(FooComponent);

        // #Bar Component
        const renderBar = jest.fn((...props) => null);

        class BarComponent extends React.Component<WithContextProps<AppContext, BarComponentProps>> {
            render() {
                return renderBar(this.props);
            }
        }

        const Bar = withContext(mainContext, 'bar')<BarComponentProps>(BarComponent);

        const renderBaz = jest.fn((...props) => null);

        class BazComponent extends React.Component<WithContextProps<AppContext, BarComponentProps>> {
            render() {
                return renderBaz(this.props);
            }
        }

        const Baz = withContext(mainContext)<AppContext>(BazComponent);

        const contextRenderInside = jest.fn((...props) => null);
        const contextRenderOutside = jest.fn((...props) => null);

        const AppRenderer = TestRenderer.create(
            <React.Fragment>
                <ContextFactory
                    contextType={mainContext}
                    initContextValue={mainContextValue}
                >
                    <Foo />
                    <Bar />
                    <Baz />
                    <ContextRender contextType={mainContext} keys={['foo']}>
                        {(props) => contextRenderInside(props)}
                    </ContextRender>
                </ContextFactory>
                <ContextRender contextType={mainContext} keys={['foo']}>
                    {(props) => contextRenderOutside(props)}
                </ContextRender>
            </React.Fragment>
        );

        const ProviderTestInstance = AppRenderer.root.findByType(ContextProvider);

        const providerElement = ProviderTestInstance.instance as ContextProvider<AppContext>;
        const providerDefaultProps = {
            setContext: providerElement.state.setContext as WithContextProps<AppContext>['setContext'],
            getContext: providerElement.state.getContext as WithContextProps<AppContext>['getContext']
        };

        afterEach(() => {
            renderBar.mockClear();
            renderFoo.mockClear();
            renderBaz.mockClear();
            contextRenderInside.mockClear();
            contextRenderOutside.mockClear();
        });

        it('should all renderers called', () => {
            expect(renderFoo).toBeCalledWith({
                foo: mainContextValue.foo,
                ...providerDefaultProps
            });

            expect(renderBar).toBeCalledWith({
                bar: mainContextValue.bar,
                ...providerDefaultProps
            });

            expect(renderBaz).toHaveBeenCalledWith({
                ...mainContextValue,
                ...providerDefaultProps
            });

            expect(contextRenderInside).toBeCalledWith({
                foo: mainContextValue.foo,
                ...providerDefaultProps
            });

            expect(contextRenderOutside).toBeCalledWith({
                foo: mainContextValue.foo
            });
        });

        it('should get all initial context', () => {
            const initialContext = providerDefaultProps.getContext('bar', 'foo');
            expect(initialContext).toEqual(mainContextValue);
        });

        it('should "Foo" and then only one "contextRenderInside" re-render went "foo" changed', () => {
            providerElement.state.setContext({ foo: 2 });

            const nextFooValue = 2;

            const changedTextComponentProps: AppContext = {
                foo: nextFooValue,
                ...providerDefaultProps
            };

            expect(renderFoo).toBeCalledWith(changedTextComponentProps);
            expect(contextRenderInside).toBeCalledWith(changedTextComponentProps);
            expect(contextRenderOutside).not.toBeCalled();
        });

        it('should "Bar" not re-render went "num" changed', () => {
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
            const nextFooPrimayProps = 'new-passed-props';

            AppRenderer.update(
                <ContextFactory
                    contextType={mainContext}
                    initContextValue={mainContextValue}
                >
                    <Foo fooPrimayProps={nextFooPrimayProps} />
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
    describe('without initial context value to factory', () => {
        const sideContextValue = {
            foo: 1,
            bar: 2
        };

        const sideContext = React.createContext(sideContextValue);
        sideContext.displayName = 'sideContex';

        const sideContextRender = jest.fn((...props) => null);

        TestRenderer.create(
            <ContextFactory
                contextType={sideContext}
            >
                <ContextRender contextType={sideContext}>
                    {({ foo, bar }) => sideContextRender({ foo, bar })}
                </ContextRender>
            </ContextFactory>
        );

        afterEach(() => {
            sideContextRender.mockClear();
        });

        it('should renderer called', () => {
            expect(sideContextRender).toBeCalledWith(sideContextValue);
        });
    });
});