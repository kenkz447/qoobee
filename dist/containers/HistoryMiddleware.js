"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var history_1 = require("history");
var app_1 = require("../app");
var React = __importStar(require("react"));
var libs_1 = require("../libs");
var HistoryMiddleware = /** @class */ (function (_super) {
    __extends(HistoryMiddleware, _super);
    function HistoryMiddleware(props) {
        var _this = _super.call(this, props) || this;
        _this.createHistoryMiddleware = function (history) {
            var originPush = history.push;
            var originReplace = history.replace;
            var nextReplace = function () {
                app_1.events.emit(app_1.ON_HISTORY_REPLACE, arguments);
                originReplace.apply(window, arguments);
            };
            var $self = _this;
            return {
                push: function (next) {
                    var nextUrl = typeof next === 'string' ? next : next.pathname;
                    var currentUrl = location.pathname + location.search;
                    if (nextUrl === currentUrl) {
                        return;
                    }
                    var currentRole = $self.props.currentRole;
                    var hasRedirects = (currentRole && currentRole.redirects);
                    var redirectTarget = hasRedirects &&
                        currentRole.redirects.find(function (r) { return r.test.test(nextUrl); });
                    if (redirectTarget) {
                        var args = [redirectTarget.target];
                        originPush.apply(window, args);
                        return;
                    }
                    originPush.apply(window, arguments);
                },
                replace: nextReplace
            };
        };
        _this.applyHistoryMiddeware = function (history, middleWares) {
            for (var middleWareKey in middleWares) {
                if (!history.hasOwnProperty(middleWareKey)) {
                    continue;
                }
                history[middleWareKey] = middleWares[middleWareKey];
            }
            return history;
        };
        _this.createHistory = function () {
            var history = history_1.createBrowserHistory();
            var middleWares = _this.createHistoryMiddleware(history);
            return _this.applyHistoryMiddeware(history, middleWares);
        };
        var setContext = props.setContext;
        setContext({
            history: _this.createHistory()
        });
        return _this;
    }
    HistoryMiddleware.prototype.render = function () {
        var _a = this.props, history = _a.history, children = _a.children;
        if (!history) {
            return null;
        }
        return children;
    };
    return HistoryMiddleware;
}(React.PureComponent));
exports.default = libs_1.withContext('history', 'currentRole')(HistoryMiddleware);
