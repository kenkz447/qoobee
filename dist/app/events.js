var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "eventemitter3"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var eventemitter3_1 = __importDefault(require("eventemitter3"));
    exports.ON_HISTORY_PUSH = 'ON_HISTORY_PUSH';
    exports.ON_HISTORY_REPLACE = 'ON_HISTORY_REPLACE';
    exports.events = new eventemitter3_1.default();
});
