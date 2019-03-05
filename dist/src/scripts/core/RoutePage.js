"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
class RoutePage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.setDocumentTitle = () => {
            document.title = this.title;
        };
        this.setDocumentTitle();
    }
    get title() {
        const InheritPage = Object.getPrototypeOf(this).constructor;
        if (!InheritPage.hasOwnProperty('routeInfo')) {
            return 'Untitle page';
        }
        const routeInfo = InheritPage.routeInfo;
        return typeof routeInfo.title === 'string' ? routeInfo.title : routeInfo.title(this.props, this.state);
    }
    componentDidUpdate() {
        this.setDocumentTitle();
    }
}
exports.RoutePage = RoutePage;
