"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var app_1 = require("../app");
function policyIsAllowed(policies, funcKey, policy, values, appContext) {
    if (typeof policy === 'function') {
        return policy(appContext, funcKey, values);
    }
    return policies[policy] ? policies[policy](appContext, funcKey) : false;
}
var AccessControl = /** @class */ (function (_super) {
    __extends(AccessControl, _super);
    function AccessControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccessControl.prototype.render = function () {
        var e_1, _a;
        var _b = this.context, policies = _b.policies, getContext = _b.getContext;
        var _c = this.props, funcKey = _c.funcKey, policy = _c.policy, children = _c.children, values = _c.values;
        var appContext = getContext();
        var defaultPolicyResult = true;
        var polityResult = defaultPolicyResult;
        if (Array.isArray(policy)) {
            try {
                for (var policy_1 = __values(policy), policy_1_1 = policy_1.next(); !policy_1_1.done; policy_1_1 = policy_1.next()) {
                    var policyName = policy_1_1.value;
                    polityResult = policyIsAllowed(policies, funcKey, policyName, values, appContext);
                    if (polityResult !== defaultPolicyResult) {
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (policy_1_1 && !policy_1_1.done && (_a = policy_1.return)) _a.call(policy_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            polityResult = policyIsAllowed(policies, funcKey, policy, values, appContext);
        }
        return children({
            allowed: polityResult === true,
            redirectUrl: polityResult !== true ? polityResult : false
        });
    };
    AccessControl.contextType = app_1.rootContextType;
    return AccessControl;
}(React.PureComponent));
exports.AccessControl = AccessControl;
