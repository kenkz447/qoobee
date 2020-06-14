"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTranslatior = function (_a) {
    var resources = _a.resources, defaultLangue = _a.defaultLangue;
    var _b;
    var lang = (_b = localStorage.getItem('lang'), (_b !== null && _b !== void 0 ? _b : defaultLangue));
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
