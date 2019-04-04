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
