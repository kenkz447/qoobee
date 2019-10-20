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
Object.defineProperty(exports, "__esModule", { value: true });
var urijs_1 = require("urijs");
var app_1 = require("../../app");
var ReactUrlQuery = /** @class */ (function () {
    function ReactUrlQuery(pageInstance) {
        var _this = this;
        this.registeredStateKeys = [];
        this.locationStateFromObj = function (obj) {
            return _this.registeredStateKeys.reduce(function (prevResult, currentItem) {
                prevResult[currentItem] = obj[currentItem] || undefined;
                return prevResult;
            }, {});
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
                callback(nextLocationState);
            });
        };
        this.sync = function (key, defaulValue) {
            _this.registeredStateKeys.push(key);
            if (!_this._locationBagUnListener) {
                _this._locationBagUnListener = _this.listen(function (nextLocationState) {
                    _this.pageInsance.setState(nextLocationState);
                });
            }
            var queryObject = urijs_1.parseQuery(window.location.search);
            return queryObject[key] || defaulValue;
        };
        this.get = function (key) {
            if (!_this.pageInsance.state) {
                var queryObject = urijs_1.parseQuery(window.location.search);
                return queryObject[key];
            }
            return _this.pageInsance.state[key];
        };
        this.set = function (statePart, callback) {
            _this.originSetState(statePart, function () {
                var nextLocationState = _this.locationStateFromObj(__assign({}, _this.pageInsance.state));
                var nextQuery = urijs_1.buildQuery(nextLocationState, true);
                var nextSearch = nextQuery ? "?" + nextQuery : '';
                if (location.search === nextSearch) {
                    return;
                }
                app_1.history.push(nextSearch);
                if (callback) {
                    callback();
                }
            });
        };
        this.pageInsance = pageInstance;
        this.originSetState = pageInstance.setState.bind(pageInstance);
        this.pageInsance.setState = this.set;
    }
    return ReactUrlQuery;
}());
exports.ReactUrlQuery = ReactUrlQuery;
