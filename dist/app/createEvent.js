"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("./events");
exports.createEvent = function (name) {
    return {
        name: name,
        emit: function (payload) {
            events_1.events.emit(name, payload);
        },
        listen: function (callback) {
            events_1.events.on(name, callback);
            return function () {
                events_1.events.removeListener(name, callback);
            };
        }
    };
};
