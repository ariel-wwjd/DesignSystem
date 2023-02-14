"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Margin = void 0;
const react_1 = __importDefault(require("react"));
const Margin = ({ size = 'xxxs', side, children, overrideProps = {} }) => {
    const classNames = side ? `dse-margin-${String(side)}-${size}` : `dse-margin-${size}`;
    const renderProps = {
        recommendedProps: (overrideProps) => (Object.assign(Object.assign({ className: classNames }, overrideProps), { style: Object.assign({}, overrideProps === null || overrideProps === void 0 ? void 0 : overrideProps.style) }))
    };
    return react_1.default.createElement("div", Object.assign({}, renderProps.recommendedProps(overrideProps)), children);
};
exports.Margin = Margin;
//# sourceMappingURL=Margin.js.map