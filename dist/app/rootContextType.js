"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var getDefaultInitContext_1 = require("./getDefaultInitContext");
exports.rootContextType = React.createContext(getDefaultInitContext_1.getDefaultInitContext());
exports.rootContextType.displayName = 'RootContextType';
