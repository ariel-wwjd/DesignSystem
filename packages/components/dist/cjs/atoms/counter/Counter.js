"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
const react_1 = __importStar(require("react"));
const button_1 = require("../button");
const Counter = ({ label = 'Counter', phase = 1, start = 0 }) => {
    const [value, setValue] = (0, react_1.useState)(start);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", null, label),
        react_1.default.createElement("div", null, value),
        react_1.default.createElement(button_1.Button, { onClick: () => setValue(value + phase) }, "Increse")));
};
exports.Counter = Counter;
//# sourceMappingURL=Counter.js.map