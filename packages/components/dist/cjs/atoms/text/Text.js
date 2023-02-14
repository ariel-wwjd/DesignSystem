"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const react_1 = __importDefault(require("react"));
const Text = ({ children, size = 'base', weight = 'normal', textColor = '#000000bab', overrideProps = {} }) => {
    const classNames = `dse-text dse-text-${size} dse-text-${String(weight)}`;
    const renderProps = {
        recommendedProps: (overrideProps) => (Object.assign(Object.assign({ className: classNames }, overrideProps), { style: Object.assign({ color: textColor }, overrideProps === null || overrideProps === void 0 ? void 0 : overrideProps.style) }))
    };
    return react_1.default.createElement("p", Object.assign({}, renderProps.recommendedProps(overrideProps)), children);
};
exports.Text = Text;
//# sourceMappingURL=Text.js.map