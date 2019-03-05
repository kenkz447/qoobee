"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTranslatior = ({ resources }) => {
    const lang = localStorage.getItem('lang');
    return (source) => {
        if (!lang) {
            return source;
        }
        if (resources[lang]) {
            return resources[lang][source] || source;
        }
        return source;
    };
};
