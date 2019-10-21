import * as React from 'react';

import { AppCoreContext } from '../../Types';
import { WithContextProps, withContext } from '../context';
import { rootContextType } from '../../app';

interface I18NState {
    readonly currentLanguage: string;
    readonly needsUpdate?: boolean;
}

interface I18NLoaderProps {
    abc: string;
}

type I18NLoaderInjectedProps = I18NLoaderProps & WithContextProps<AppCoreContext>;

class I18NLoaderInjected extends React.PureComponent<
    I18NLoaderInjectedProps,
    I18NState
    > {
    static getDerivedStateFromProps(
        nextProps: I18NLoaderInjectedProps,
        state: I18NState
    ): I18NState | null {
        if (nextProps.currentLanguage !== state.currentLanguage) {
            return {
                currentLanguage: nextProps.currentLanguage!,
                needsUpdate: true
            };
        }
        return null;
    }

    constructor(props: I18NLoaderInjectedProps) {
        super(props);
        this.state = {
            currentLanguage: props.currentLanguage
        };
        localStorage.setItem('lang', this.state.currentLanguage);
    }

    public componentDidUpdate() {
        if (this.state.needsUpdate) {
            localStorage.setItem('lang', this.state.currentLanguage);

            this.setState({
                needsUpdate: false
            });
        }
    }

    public render() {
        if (this.state.needsUpdate) {
            return null;
        }

        return this.props.children;
    }
}

const I18NLoaderInjector = withContext(rootContextType, 'currentLanguage');

export const I18NLoader = I18NLoaderInjector<I18NLoaderProps>(I18NLoaderInjected);