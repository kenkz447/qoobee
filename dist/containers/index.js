(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./AccessControl", "./DelayRender", "./ErrorLogger", "./HistoryMiddleware", "./AccessControl", "./BreakpointDetector"], factory);
    }
})(function (require, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(require("./AccessControl"));
    __export(require("./DelayRender"));
    __export(require("./ErrorLogger"));
    var HistoryMiddleware_1 = require("./HistoryMiddleware");
    exports.HistoryMiddleware = HistoryMiddleware_1.default;
    var AccessControl_1 = require("./AccessControl");
    exports.AccessControl = AccessControl_1.default;
    var BreakpointDetector_1 = require("./BreakpointDetector");
    exports.BreakpointDetector = BreakpointDetector_1.default;
});
