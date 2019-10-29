"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var urijs_1 = require("urijs");
var difference_1 = __importDefault(require("lodash/difference"));
var app_1 = require("../../app");
var ReactUrlQuery = /** @class */ (function () {
    function ReactUrlQuery(pageInstance) {
        var _this = this;
        this.defaultValues = {};
        this.registeredStateKeys = [];
        this.getCurrentValue = function (key) {
            var queryObject = urijs_1.parseQuery(window.location.search);
            var defaulValue = _this.defaultValues[key];
            var defaulValueType = typeof defaulValue;
            var currentParamValue = queryObject[key];
            if (!currentParamValue) {
                return defaulValue;
            }
            if (typeof currentParamValue === defaulValueType) {
                return currentParamValue;
            }
            if (Array.isArray(defaulValue)) {
                if (Array.isArray(currentParamValue)) {
                    return currentParamValue;
                }
                var nextValue = [currentParamValue];
                var currentStateValue = _this.pageInsance.state[key];
                var diffValues = difference_1.default(nextValue, currentStateValue);
                if (diffValues.length > 0) {
                    return nextValue;
                }
                return currentStateValue;
            }
            switch (defaulValueType) {
                case 'boolean':
                    return currentParamValue === 'true';
                case 'number':
                    return +currentParamValue;
                default:
                    return currentParamValue;
            }
        };
        this.locationStateFromObj = function (obj) {
            var originObj = _this.registeredStateKeys.reduce(function (prevResult, currentItem) {
                prevResult[currentItem] = obj[currentItem] || undefined;
                return prevResult;
            }, {});
            for (var key in originObj) {
                if (Object(originObj).hasOwnProperty(key)) {
                    var isEmptyArray = Array.isArray(originObj[key]) && !originObj[key].length;
                    if (isEmptyArray) {
                        delete originObj[key];
                    }
                    if (originObj[key] === undefined) {
                        delete originObj[key];
                    }
                }
            }
            return originObj;
        };
        this.listen = function (callback) {
            return app_1.history.listen(function () {
                var queryObject = urijs_1.parseQuery(window.location.search);
                var nextLocationState = _this.locationStateFromObj(queryObject);
                var currentLocationState = _this.locationStateFromObj(_this.pageInsance.state);
                var isLocationStateChanged = JSON.stringify(nextLocationState) !== JSON.stringify(currentLocationState);
                if (!isLocationStateChanged) {
                    return;
                }
                for (var key in Object(nextLocationState)) {
                    if (Object(nextLocationState).hasOwnProperty(key)) {
                        if (_this.defaultValues[key]) {
                            nextLocationState[key] = _this.getCurrentValue(key);
                        }
                    }
                }
                var nextState = __assign(__assign({}, _this.defaultValues), nextLocationState);
                var needsUpdate = false;
                for (var key in Object(nextState)) {
                    if (Object(nextState).hasOwnProperty(key)) {
                        needsUpdate = nextState[key] !== _this.pageInsance.state[key];
                        if (needsUpdate) {
                            break;
                        }
                    }
                }
                if (!needsUpdate) {
                    return;
                }
                callback(nextState);
            });
        };
        this.sync = function (key, defaulValue) {
            _this.registeredStateKeys.push(key);
            _this.defaultValues[key] = defaulValue;
            if (!_this._locationBagUnListener) {
                _this._locationBagUnListener = _this.listen(function (nextLocationState) {
                    _this.pageInsance.setState(nextLocationState);
                });
            }
            return _this.getCurrentValue(key);
        };
        this.get = function (key) {
            if (!_this.pageInsance.state) {
                var queryObject = urijs_1.parseQuery(window.location.search);
                return queryObject[key];
            }
            return _this.getCurrentValue(key);
        };
        this.set = function (statePart, callback) {
            if (!statePart) {
                return;
            }
            for (var key in statePart) {
                if (Object(statePart).hasOwnProperty(key)) {
                    if (statePart[key] === undefined && _this.defaultValues[key]) {
                        delete statePart[key];
                    }
                }
            }
            _this.originSetState(__assign(__assign({}, _this.pageInsance.state), statePart), function () {
                var nextLocationState = _this.locationStateFromObj(__assign({}, _this.pageInsance.state));
                var nextQuery = urijs_1.buildQuery(nextLocationState, true);
                var nextSearch = nextQuery ? "?" + nextQuery : '';
                var needsUpdateUrl = (location.search !== nextSearch);
                if (!needsUpdateUrl) {
                    return;
                }
                app_1.history.push(nextSearch);
                if (!callback) {
                    return;
                }
                callback();
            });
        };
        this.pageInsance = pageInstance;
        this.originSetState = pageInstance.setState.bind(pageInstance);
        this.pageInsance.setState = this.set;
    }
    return ReactUrlQuery;
}());
exports.ReactUrlQuery = ReactUrlQuery;
