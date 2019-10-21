"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var history_1 = require("history");
var defaultInitContext = {
    currentBreakpoint: 'lg',
    currentLanguage: 'en',
    currentRole: null,
    currentUser: null,
    history: history_1.createBrowserHistory(),
    menus: {},
    paths: {},
    policies: {}
};
exports.getDefaultInitContext = function () {
    return defaultInitContext;
};
