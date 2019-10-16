(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./makeRoute"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var makeRoute_1 = require("./makeRoute");
    exports.makeRoutes = function (Components) { return Components.map(function (Component) {
        return makeRoute_1.makeRoute(Component);
    }); };
});
