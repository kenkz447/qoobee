"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var makeRoute_1 = require("./makeRoute");
exports.makeRoutes = function (Components) { return Components.map(function (Component) {
    return makeRoute_1.makeRoute(Component);
}); };
