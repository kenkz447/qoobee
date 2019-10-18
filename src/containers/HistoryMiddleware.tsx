import {
    createBrowserHistory,
    History,
    LocationDescriptorObject
} from 'history';
import { events, ON_HISTORY_PUSH, ON_HISTORY_REPLACE } from '../app';
import * as React from 'react';
import { WithContextProps, withContext } from '../libs';
import { AppCoreContext } from '../Types';

interface HistoryMiddlewareOwnProps {
    readonly children: React.ReactNode;
}

type HistoryMiddlewareProps = WithContextProps<AppCoreContext, HistoryMiddlewareOwnProps>;

class HistoryMiddleware extends React.PureComponent<HistoryMiddlewareProps> {
    constructor(props: HistoryMiddlewareProps) {
        super(props);
        const { setContext } = props;

        setContext({
            history: this.createHistory()
        });
    }

    public render() {
        const { history, children } = this.props;

        if (!history) {
            return null;
        }

        return children;
    }

    private readonly createHistoryMiddleware = (history: History<{}>) => {
        const originPush = history.push;
        const originReplace = history.replace;

        const nextReplace = function () {
            events.emit(ON_HISTORY_REPLACE, arguments);
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

                const { currentRole: currentUserRole } = $self.props;
                const hasRedirects = (currentUserRole && currentUserRole.redirects);

                const redirectTarget = hasRedirects &&
                    currentUserRole!.redirects!.find(r => r.test.test(nextUrl));

                if (redirectTarget) {
                    const args = [redirectTarget.target];
                    events.emit(ON_HISTORY_PUSH, args);
                    originPush.apply(window, args);
                    return;
                }

                events.emit(ON_HISTORY_PUSH, arguments);
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
}

export default withContext<AppCoreContext, HistoryMiddlewareOwnProps>(
    'history',
    'currentRole'
)(HistoryMiddleware);