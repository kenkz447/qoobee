import * as React from 'react';

import { AppCoreContext } from '../../app';
import { WithContextProps, withContext } from '../context';

interface I18NState {
    readonly currentLanguage: string;
    readonly needsUpdate?: boolean;
}

type I18NLoaderContext = Pick<AppCoreContext, 'currentLanguage'>;

class I18NLoader extends React.PureComponent<WithContextProps<I18NLoaderContext>, I18NState> {
    static getDerivedStateFromProps(
        nextProps: WithContextProps<I18NLoaderContext>,
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

    constructor(props: WithContextProps<I18NLoaderContext>) {
        super(props);
        this.state = {
            currentLanguage: props.currentLanguage
        };
        localStorage.setItem('lang', this.state.currentLanguage);
    }

    componentDidUpdate() {
        if (this.state.needsUpdate) {
            localStorage.setItem('lang', this.state.currentLanguage);
            
            this.setState({
                needsUpdate: false
            });
        }
    }

    render() {
        if (this.state.needsUpdate) {
            return null;
        }

        return this.props.children;
    }
}

export default withContext<I18NLoaderContext>('currentLanguage')(I18NLoader);