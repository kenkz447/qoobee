import {
    createBrowserHistory,
    History,
    LocationDescriptorObject
} from 'history';
import * as React from 'react';

import { rootContextType } from '../app';
import { WithContextProps, withContext } from '../libs';
import { AppCoreContext } from '../Types';

interface HistoryMiddlewareOwnProps {
}

type HistoryMiddlewareContext = Pick<AppCoreContext, 'history'> & Pick<AppCoreContext, 'currentRole'>;
type HistoryMiddlewareProps = WithContextProps<HistoryMiddlewareContext, HistoryMiddlewareOwnProps>;

class HistoryMiddlewareInjected extends React.PureComponent<HistoryMiddlewareProps> {
    constructor(props: HistoryMiddlewareProps) {
        super(props);
        const { setContext } = props;
        setContext({
            history: this.createHistory()
        });
    }
    
    private readonly createHistoryMiddleware = (history: History<{}>) => {
        const originPush = history.push;
        const originReplace = history.replace;

        const nextReplace = function () {
            originReplace.apply(window, arguments);
        };

        const $self = this;

        return {
            push: function (next: string | LocationDescriptorObject<{}>) {
                const nextUrl = typeof next === 'string' ? next : next.pathname!;
                const currentUrl = location.pathname + location.search;
                if (nextUrl === currentUrl) {
                    return;
                }

                const { currentRole } = $self.props;
                const hasRedirects = (currentRole && currentRole.redirects);

                const redirectTarget = hasRedirects &&
                    currentRole!.redirects!.find(r => r.test.test(nextUrl));

                if (redirectTarget) {
                    const args = [redirectTarget.target];
                    originPush.apply(window, args);
                    return;
                }

                originPush.apply(window, arguments);
            },
            replace: nextReplace
        };
    }

    private readonly applyHistoryMiddeware = (history: History<{}>, middleWares: {}) => {
        for (const middleWareKey in middleWares) {
            if (!history.hasOwnProperty(middleWareKey)) {
                continue;
            }

            history[middleWareKey] = middleWares[middleWareKey];
        }

        return history;
    }

    private readonly createHistory = () => {
        const history = createBrowserHistory();
        const middleWares = this.createHistoryMiddleware(history);
        return this.applyHistoryMiddeware(history, middleWares);
    }
    
    public render() {
        const { history, children } = this.props;

        if (!history) {
            return null;
        }

        return children;
    }
}

export const HistoryMiddlewareInjector = withContext(
    rootContextType,
    'history',
    'currentRole'
);

export const HistoryMiddleware = HistoryMiddlewareInjector(HistoryMiddlewareInjected);