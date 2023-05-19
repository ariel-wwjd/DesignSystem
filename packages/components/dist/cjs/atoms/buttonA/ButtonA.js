"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonA = void 0;
const react_1 = __importDefault(require("react"));
// this is a test Button for a component that uses a the DS pattern
const ButtonA = ({ title, state, // 'primary' | 'secondary';
onClick, overrideProps = {} }) => {
    let classNames = 'ds-buttonA ' + 'button-a-' + state;
    const renderProps = {
        recommendedProps: (overrideProps) => (Object.assign(Object.assign({ className: overrideProps.className ? overrideProps.className : classNames }, overrideProps), { style: Object.assign({}, overrideProps === null || overrideProps === void 0 ? void 0 : overrideProps.style) }))
    };
    return (react_1.default.createElement("button", Object.assign({}, renderProps.recommendedProps(overrideProps), { onClick: onClick }), title));
};
exports.ButtonA = ButtonA;
//# sourceMappingURL=ButtonA.js.map