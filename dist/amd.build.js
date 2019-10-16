var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
define("Types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("app/events", ["require", "exports", "eventemitter3"], function (require, exports, eventemitter3_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    eventemitter3_1 = __importDefault(eventemitter3_1);
    exports.ON_HISTORY_PUSH = 'ON_HISTORY_PUSH';
    exports.ON_HISTORY_REPLACE = 'ON_HISTORY_REPLACE';
    exports.events = new eventemitter3_1.default();
});
define("app/swRegistration", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.swRegistration = function (props) {
        var serviceWorkerEnabled = 'serviceWorker' in navigator;
        if (!serviceWorkerEnabled) {
            return;
        }
        var onUpdateFound = props.onUpdateFound, _a = props.workerUrl, workerUrl = _a === void 0 ? '/service-worker.js' : _a, _b = props.workerOptions, workerOptions = _b === void 0 ? { scope: '/' } : _b;
        var loadServiceWorker = function () { return __awaiter(void 0, void 0, void 0, function () {
            var registration, registrationError_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, navigator.serviceWorker.register(workerUrl, workerOptions)];
                    case 1:
                        registration = _a.sent();
                        console.info('SW registered: ', registration);
                        registration.onupdatefound = onUpdateFound;
                        return [3 /*break*/, 3];
                    case 2:
                        registrationError_1 = _a.sent();
                        console.info('SW registration failed: ', registrationError_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        window.addEventListener('load', loadServiceWorker);
    };
});
define("app/index", ["require", "exports", "app/events", "app/swRegistration"], function (require, exports, events_1, swRegistration_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(events_1);
    __export(swRegistration_1);
});
define("libs/context/Types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("libs/context/ContextProvider", ["require", "exports", "react", "libs/context/ContextFactory"], function (require, exports, React, ContextFactory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    React = __importStar(React);
    var ContextProvider = /** @class */ (function (_super) {
        __extends(ContextProvider, _super);
        function ContextProvider(props) {
            var _this = _super.call(this, props) || this;
            _this.setContextProxy = function (source, newContext) {
                var loggingEnabled = _this.props.loggingEnabled;
                var newContextKey = Object.keys(newContext);
                var oldContext = _this.getContext(newContextKey);
                var setContextCallback = (function () {
                    if (loggingEnabled) {
                        _this.log(source, newContext, oldContext);
                    }
                });
                _this.setState(newContext, setContextCallback);
            };
            _this.getContext = function () {
                var contextKeys = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    contextKeys[_i] = arguments[_i];
                }
                if (!contextKeys || !contextKeys.length) {
                    return Object.seal(_this.state);
                }
                return contextKeys.reduce(function (gettedContext, currentKey) {
                    gettedContext[currentKey] = _this.state[currentKey];
                    return gettedContext;
                }, {});
            };
            _this.log = function (source, newContext, oldContext) {
                console.group('Context was changed');
                console.log('By: ', source);
                console.log('From:', oldContext);
                console.log('To:', newContext);
                console.groupEnd();
            };
            _this.listenContext = function (callback) {
            };
            var initContextValue = props.initContextValue;
            var _a = _this, setContextProxy = _a.setContextProxy, getContext = _a.getContext;
            _this.state = __assign(__assign({}, initContextValue), { setContext: function (context) {
                    setContextProxy(this, context);
                }, getContext: getContext, listenContext: _this.listenContext });
            return _this;
        }
        ContextProvider.prototype.render = function () {
            var Context = ContextFactory_1.ContextFactory.instance.Context;
            return (React.createElement(Context.Provider, { value: this.state }, this.props.children));
        };
        return ContextProvider;
    }(React.Component));
    exports.ContextProvider = ContextProvider;
});
define("libs/context/ContextFactory", ["require", "exports", "react", "libs/context/ContextProvider"], function (require, exports, React, ContextProvider_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    React = __importStar(React);
    var ContextFactory = /** @class */ (function (_super) {
        __extends(ContextFactory, _super);
        function ContextFactory(props) {
            var _this = _super.call(this, props) || this;
            var context = _this.props.context;
            _this.Context = context;
            ContextFactory.instance = _this;
            return _this;
        }
        ContextFactory.prototype.render = function () {
            var _this = this;
            var _a = this.props, loggingEnabled = _a.loggingEnabled, children = _a.children, initContextValue = _a.initContextValue;
            return (React.createElement(ContextProvider_1.ContextProvider, { ref: function (e) { return _this.provider = e; }, initContextValue: initContextValue, loggingEnabled: loggingEnabled }, children));
        };
        return ContextFactory;
    }(React.Component));
    exports.ContextFactory = ContextFactory;
});
define("libs/context/ContextInjectWrapper", ["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    React = __importStar(React);
    var InjectedWrapper = /** @class */ (function (_super) {
        __extends(InjectedWrapper, _super);
        function InjectedWrapper() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InjectedWrapper.prototype.render = function () {
            var _a = this.props, Component = _a.Component, props = __rest(_a, ["Component"]);
            return (React.createElement(Component, __assign({}, props)));
        };
        return InjectedWrapper;
    }(React.PureComponent));
    exports.InjectedWrapper = InjectedWrapper;
});
define("libs/context/withContext", ["require", "exports", "react", "libs/context/ContextFactory", "libs/context/ContextInjectWrapper"], function (require, exports, React, ContextFactory_2, ContextInjectWrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    React = __importStar(React);
    function withContext() {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        return function (Component) {
            var getContextToProps = function (context) {
                var e_1, _a;
                var contextToProps = {};
                if (keys) {
                    try {
                        // Add context request by keys
                        for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                            var contextKey = keys_1_1.value;
                            contextToProps[contextKey] = context[contextKey];
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                // Add required context
                contextToProps.setContext = context.setContext;
                contextToProps.getContext = context.getContext;
                return contextToProps;
            };
            return /** @class */ (function (_super) {
                __extends(Injector, _super);
                function Injector() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.renderConsumer = function (context) {
                        var contextToProps = getContextToProps(context);
                        var componentPropsWithContext = Object.assign(contextToProps, _this.props);
                        return React.createElement(ContextInjectWrapper_1.InjectedWrapper, __assign({ Component: Component }, componentPropsWithContext));
                    };
                    return _this;
                }
                Injector.prototype.render = function () {
                    var Context = ContextFactory_2.ContextFactory.instance.Context;
                    return (React.createElement(Context.Consumer, null, this.renderConsumer));
                };
                return Injector;
            }(React.PureComponent));
        };
    }
    exports.withContext = withContext;
});
define("libs/context/ContextRender", ["require", "exports", "react", "libs/context/ContextFactory"], function (require, exports, React, ContextFactory_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    React = __importStar(React);
    var ContextRender = /** @class */ (function (_super) {
        __extends(ContextRender, _super);
        function ContextRender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.renderConsumer = function (context) {
                var _a = _this.props, children = _a.children, keys = _a.keys;
                var contextToProps = keys.reduce(function (childContext, childContextKey) {
                    var _a;
                    return __assign(__assign({}, childContext), (_a = {}, _a[childContextKey] = context[childContextKey], _a));
                }, {
                    setContext: context.setContext,
                    getContext: context.getContext
                });
                return children(contextToProps);
            };
            return _this;
        }
        ContextRender.prototype.render = function () {
            var Context = ContextFactory_3.ContextFactory.instance.Context;
            return (React.createElement(Context.Consumer, null, this.renderConsumer));
        };
        return ContextRender;
    }(React.PureComponent));
    exports.ContextRender = ContextRender;
});
define("libs/context/index", ["require", "exports", "libs/context/ContextFactory", "libs/context/withContext", "libs/context/ContextRender"], function (require, exports, ContextFactory_4, withContext_1, ContextRender_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(ContextFactory_4);
    __export(withContext_1);
    __export(ContextRender_1);
});
define("libs/route/makeRoute", ["require", "exports", "react", "react-router-dom", "containers/index"], function (require, exports, React, react_router_dom_1, containers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    React = __importStar(React);
    exports.makeRoute = function (Component) {
        if (!Component.routeInfo) {
            throw Error('Default Props with routeProps needed in Route Component!');
        }
        var routeInfo = Component.routeInfo;
        var routeProps = {
            key: routeInfo.path,
            path: routeInfo.path,
            exact: routeInfo.exact
        };
        if (routeInfo.policies) {
            return (React.createElement(react_router_dom_1.Route, __assign({}, routeProps), function (componentProps) {
                return (React.createElement(containers_1.AccessControl, { policy: routeInfo.policies, renderDeny: function () { return React.createElement(react_router_dom_1.Redirect, { to: "/deny" }); } }, function () { return React.createElement(Component, __assign({}, componentProps)); }));
            }));
        }
        return (React.createElement(react_router_dom_1.Route, __assign({}, routeProps, { component: Component })));
    };
});
define("libs/route/makeRoutes", ["require", "exports", "libs/route/makeRoute"], function (require, exports, makeRoute_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeRoutes = function (Components) { return Components.map(function (Component) {
        return makeRoute_1.makeRoute(Component);
    }); };
});
define("libs/route/index", ["require", "exports", "libs/route/makeRoutes"], function (require, exports, makeRoutes_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(makeRoutes_1);
});
define("libs/i18n/I18NLoader", ["require", "exports", "react", "libs/context/index"], function (require, exports, React, context_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    React = __importStar(React);
    var I18NLoader = /** @class */ (function (_super) {
        __extends(I18NLoader, _super);
        function I18NLoader(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                currentLanguage: props.currentLanguage
            };
            localStorage.setItem('lang', _this.state.currentLanguage);
            return _this;
        }
        I18NLoader.getDerivedStateFromProps = function (nextProps, state) {
            if (nextProps.currentLanguage !== state.currentLanguage) {
                return {
                    currentLanguage: nextProps.currentLanguage,
                    needsUpdate: true
                };
            }
            return null;
        };
        I18NLoader.prototype.componentDidUpdate = function () {
            if (this.state.needsUpdate) {
                localStorage.setItem('lang', this.state.currentLanguage);
                this.setState({
                    needsUpdate: false
                });
            }
        };
        I18NLoader.prototype.render = function () {
            if (this.state.needsUpdate) {
                return null;
            }
            return this.props.children;
        };
        return I18NLoader;
    }(React.PureComponent));
    exports.default = context_1.withContext('currentLanguage')(I18NLoader);
});
define("libs/i18n/createTranslatior", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createTranslatior = function (_a) {
        var resources = _a.resources;
        var lang = localStorage.getItem('lang');
        return function (source) {
            if (!lang) {
                return source;
            }
            if (resources[lang]) {
                return resources[lang][source] || source;
            }
            return source;
        };
    };
});
define("libs/i18n/index", ["require", "exports", "libs/i18n/I18NLoader", "libs/i18n/createTranslatior"], function (require, exports, I18NLoader_1, createTranslatior_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    I18NLoader_1 = __importDefault(I18NLoader_1);
    exports.I18NLoader = I18NLoader_1.default;
    __export(createTranslatior_1);
});
define("libs/index", ["require", "exports", "libs/context/index", "libs/route/index", "libs/i18n/index"], function (require, exports, context_2, route_1, i18n_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(context_2);
    __export(route_1);
    __export(i18n_1);
});
define("containers/AccessControl", ["require", "exports", "libs/index"], function (require, exports, libs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function policyIsAllowed(policies, funcKey, policy, values, appContext) {
        if (typeof policy === 'function') {
            return policy(appContext, funcKey, values);
        }
        return policies[policy] ? policies[policy](appContext, funcKey) : false;
    }
    function AccessControl(props) {
        var e_2, _a;
        var funcKey = props.funcKey, policy = props.policy, children = props.children, policies = props.policies, getContext = props.getContext, renderDeny = props.renderDeny, values = props.values;
        if (!policies) {
            if (typeof renderDeny === 'function') {
                return renderDeny();
            }
            return null;
        }
        var appContext = getContext();
        var isAllowed = true;
        if (Array.isArray(policy)) {
            try {
                for (var policy_1 = __values(policy), policy_1_1 = policy_1.next(); !policy_1_1.done; policy_1_1 = policy_1.next()) {
                    var policyName = policy_1_1.value;
                    isAllowed = policyIsAllowed(policies, funcKey, policyName, values, appContext);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (policy_1_1 && !policy_1_1.done && (_a = policy_1.return)) _a.call(policy_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        else {
            isAllowed = policyIsAllowed(policies, funcKey, policy, values, appContext);
        }
        if (!isAllowed) {
            if (typeof renderDeny === 'function') {
                return renderDeny();
            }
            return null;
        }
        return typeof children === 'function' ? children() : children;
    }
    exports.default = libs_1.withContext('policies')(AccessControl);
});
define("containers/DelayRender", ["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    React = __importStar(React);
    var DelayRender = /** @class */ (function (_super) {
        __extends(DelayRender, _super);
        function DelayRender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                canRender: false,
            };
            return _this;
        }
        DelayRender.prototype.componentWillMount = function () {
            var _this = this;
            setTimeout(function () {
                _this.setState({
                    canRender: true,
                });
            }, this.props.timeout);
        };
        DelayRender.prototype.render = function () {
            if (!this.state.canRender) {
                return null;
            }
            return this.props.children;
        };
        return DelayRender;
    }(React.PureComponent));
    exports.DelayRender = DelayRender;
});
define("containers/ErrorLogger", ["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    React = __importStar(React);
    var ErrorLogger = /** @class */ (function (_super) {
        __extends(ErrorLogger, _super);
        function ErrorLogger(props) {
            var _this = _super.call(this, props) || this;
            var loggerEnabled = process.env.NODE_ENV === 'production';
            _this.state = {
                error: null,
                loggerEnabled: loggerEnabled
            };
            if (!loggerEnabled) {
                return _this;
            }
            if (!props.setup) {
                return _this;
            }
            props.setup();
            return _this;
        }
        ErrorLogger.prototype.componentDidUpdate = function () {
            var _a = this.state, loggerEnabled = _a.loggerEnabled, error = _a.error, errorInfo = _a.errorInfo;
            if (!loggerEnabled) {
                return;
            }
            var onError = this.props.onError;
            if (!onError) {
                return;
            }
            onError({
                error: error,
                errorInfo: errorInfo
            });
        };
        ErrorLogger.prototype.componentDidCatch = function (error, errorInfo) {
            this.setState({
                error: error,
                errorInfo: errorInfo
            });
        };
        ErrorLogger.prototype.render = function () {
            var _a = this.state, error = _a.error, errorInfo = _a.errorInfo;
            if (!error) {
                return this.props.children;
            }
            var ErrorPage = this.props.ErrorPage;
            return React.createElement(ErrorPage, { error: error, errorInfo: errorInfo });
        };
        return ErrorLogger;
    }(React.PureComponent));
    exports.ErrorLogger = ErrorLogger;
});
define("containers/HistoryMiddleware", ["require", "exports", "history", "app/index", "react", "libs/index"], function (require, exports, history_1, app_1, React, libs_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    React = __importStar(React);
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
                        var currentUserRole = $self.props.currentUserRole;
                        var hasRedirects = (currentUserRole && currentUserRole.redirects);
                        var redirectTarget = hasRedirects &&
                            currentUserRole.redirects.find(function (r) { return r.test.test(nextUrl); });
                        if (redirectTarget) {
                            var args = [redirectTarget.target];
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
    exports.default = libs_2.withContext('history', 'currentUserRole')(HistoryMiddleware);
});
define("containers/BreakpointDetector", ["require", "exports", "react", "libs/index"], function (require, exports, React, libs_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    React = __importStar(React);
    var BreakpointDetector = /** @class */ (function (_super) {
        __extends(BreakpointDetector, _super);
        function BreakpointDetector(props) {
            var _this = _super.call(this, props) || this;
            _this.onWindowResize = function () {
                var _a = _this.props, resolver = _a.resolver, setContext = _a.setContext;
                var nextBreakpoint = resolver(window.innerWidth);
                setContext({
                    currentBreakpoint: nextBreakpoint
                });
            };
            _this.onWindowResize();
            return _this;
        }
        BreakpointDetector.prototype.componentDidMount = function () {
            window.addEventListener('resize', this.onWindowResize);
        };
        BreakpointDetector.prototype.render = function () {
            return this.props.children || null;
        };
        BreakpointDetector.defaultProps = {
            resolver: function (windowWith) {
                if (windowWith >= 1200) {
                    return 'lg';
                }
                if (windowWith >= 992) {
                    return 'md';
                }
                return 'sm';
            }
        };
        return BreakpointDetector;
    }(React.PureComponent));
    exports.default = libs_3.withContext()(BreakpointDetector);
});
define("containers/index", ["require", "exports", "containers/AccessControl", "containers/DelayRender", "containers/ErrorLogger", "containers/HistoryMiddleware", "containers/AccessControl", "containers/BreakpointDetector"], function (require, exports, AccessControl_1, DelayRender_1, ErrorLogger_1, HistoryMiddleware_1, AccessControl_2, BreakpointDetector_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(AccessControl_1);
    __export(DelayRender_1);
    __export(ErrorLogger_1);
    exports.HistoryMiddleware = HistoryMiddleware_1.default;
    exports.AccessControl = AccessControl_2.default;
    exports.BreakpointDetector = BreakpointDetector_1.default;
});
define("core/Root", ["require", "exports", "react", "react-dom", "app/index", "containers/index", "libs/index"], function (require, exports, React, ReactDOM, app_2, containers_2, libs_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    React = __importStar(React);
    ReactDOM = __importStar(ReactDOM);
    var Root = /** @class */ (function (_super) {
        __extends(Root, _super);
        function Root() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Root.prototype.componentDidMount = function () {
            var SWRegistrationProps = this.props.SWRegistrationProps;
            if (!SWRegistrationProps) {
                return;
            }
            app_2.swRegistration(SWRegistrationProps);
        };
        Root.prototype.render = function () {
            var _a = this.props, renderApp = _a.renderApp, initialContext = _a.initialContext;
            return (React.createElement(libs_4.ContextFactory, { context: Root.contextType, initContextValue: initialContext },
                React.createElement(containers_2.HistoryMiddleware, null, renderApp())));
        };
        Root.contextType = React.createContext({});
        Root.render = function (rootElement, rootProps) {
            ReactDOM.render(React.createElement(Root, __assign({}, rootProps)), rootElement);
        };
        return Root;
    }(React.Component));
    exports.Root = Root;
});
define("core/View", ["require", "exports", "react", "core/Root"], function (require, exports, React, Root_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    React = __importStar(React);
    var View = /** @class */ (function (_super) {
        __extends(View, _super);
        function View(props) {
            var _this = _super.call(this, props) || this;
            _this.setDocumentTitle = function () {
                document.title = _this.title;
            };
            _this.setDocumentTitle();
            return _this;
        }
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                var InheritPage = Object.getPrototypeOf(this).constructor;
                if (!InheritPage.hasOwnProperty('routeInfo')) {
                    return 'Untitle page';
                }
                var routeInfo = InheritPage.routeInfo;
                return typeof routeInfo.title === 'string' ? routeInfo.title : routeInfo.title(this.props, this.state);
            },
            enumerable: true,
            configurable: true
        });
        View.prototype.componentDidUpdate = function () {
            this.setDocumentTitle();
        };
        View.contextType = Root_1.Root.contextType;
        return View;
    }(React.PureComponent));
    exports.View = View;
});
define("core/index", ["require", "exports", "core/Root", "core/View"], function (require, exports, Root_2, View_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(Root_2);
    __export(View_1);
});
define("index", ["require", "exports", "app/index", "core/index", "libs/index"], function (require, exports, app_3, core_1, libs_5) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(app_3);
    __export(core_1);
    __export(libs_5);
});
