"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const history_1 = require("history");
const app_1 = require("../app");
const React = __importStar(require("react"));
const react_context_service_1 = require("react-context-service");
class HistoryMiddleware extends React.PureComponent {
    constructor(props) {
        super(props);
        this.createHistoryMiddleware = (history) => {
            const originPush = history.push;
            const originReplace = history.replace;
            const nextReplace = function () {
                app_1.events.emit(app_1.ON_HISTORY_REPLACE, arguments);
                originReplace.apply(window, arguments);
            };
            const $self = this;
            return {
                push: function (next) {
                    const nextUrl = typeof next === 'string' ? next : next.pathname;
                    const currentUrl = location.pathname + location.search;
                    if (nextUrl === currentUrl) {
                        return;
                    }
                    const { currentUserRole } = $self.props;
                    const isRedirect = (currentUserRole && currentUserRole.redirects) &&
                        currentUserRole.redirects.find(r => r.test.test(nextUrl));
                    if (isRedirect) {
                        const args = [isRedirect.target];
                        app_1.events.emit(app_1.ON_HISTORY_PUSH, args);
                        originPush.apply(window, args);
                        return;
                    }
                    app_1.events.emit(app_1.ON_HISTORY_PUSH, arguments);
                    originPush.apply(window, arguments);
                },
                replace: nextReplace
            };
        };
        this.applyHistoryMiddeware = (history, middleWares) => {
            for (const middleWareKey in middleWares) {
                if (!history.hasOwnProperty(middleWareKey)) {
                    continue;
                }
                history[middleWareKey] = middleWares[middleWareKey];
            }
            return history;
        };
        this.createHistory = () => {
            const history = history_1.createBrowserHistory();
            const middleWares = this.createHistoryMiddleware(history);
            return this.applyHistoryMiddeware(history, middleWares);
        };
        const { setContext } = props;
        setContext({
            history: this.createHistory()
        });
    }
    render() {
        const { history, children } = this.props;
        if (!history) {
            return null;
        }
        return children();
    }
}
exports.default = react_context_service_1.withContext('history', 'currentUserRole')(HistoryMiddleware);
