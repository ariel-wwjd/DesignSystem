"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
const react_1 = __importDefault(require("react"));
const foundation_1 = require("@design-system/foundation");
const Color = ({ hexCode = '#bbbbbb', width = foundation_1.Spacing.sm, height = foundation_1.Spacing.sm, overrideProps = {} }) => {
    const classNames = `dse-width-${width} dse-height-${height}`;
    const renderProps = {
        recommendedProps: (overrideProps) => (Object.assign(Object.assign({ className: classNames }, overrideProps), { style: Object.assign({ backgroundColor: hexCode }, overrideProps === null || overrideProps === void 0 ? void 0 : overrideProps.style) }))
    };
    return react_1.default.createElement("div", Object.assign({}, renderProps.recommendedProps(overrideProps)));
};
exports.Color = Color;
//# sourceMappingURL=Color.js.map