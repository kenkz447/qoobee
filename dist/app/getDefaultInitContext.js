"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var history_1 = require("history");
exports.getDefaultInitContext = function () {
    return {
        currentBreakpoint: 'lg',
        currentLanguage: 'en',
        currentRole: null,
        currentUser: null,
        history: history_1.createBrowserHistory(),
        menus: {},
        paths: {},
        policies: {}
    };
};
