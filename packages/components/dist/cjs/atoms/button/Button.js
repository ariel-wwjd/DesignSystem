"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const Button = ({ children, backgroundColor, color, style, overrideProps = {} }) => {
    // let _style: CSSProperties = style || {};
    const renderProps = {
        recommendedProps: (overrideProps) => (Object.assign(Object.assign({ className: 'dse-button' }, overrideProps), { style: Object.assign({ color: color, backgroundColor: backgroundColor }, overrideProps === null || overrideProps === void 0 ? void 0 : overrideProps.style) }))
    };
    return (react_1.default.createElement("button", Object.assign({}, renderProps.recommendedProps(overrideProps)), children));
};
exports.Button = Button;
// import React, { FunctionComponent, CSSProperties } from 'react';
// import { IButtonProps } from './types';
// const Button: FunctionComponent<IButtonProps> = (props) => {
//     const { children, backgroundColor, color, style } = props;
//     let _style: CSSProperties = style || {};
//     if (backgroundColor) {
//         _style.backgroundColor = backgroundColor;
//     }
//     if (color) {
//         _style.color = color;
//     }
//     return (
//         <button style={_style} {...props}>
//             {children}
//         </button>
//     );
// };
// export { Button };
//# sourceMappingURL=Button.js.map