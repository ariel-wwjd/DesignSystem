"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonB = void 0;
const react_1 = __importDefault(require("react"));
// this is a test Button for a component that uses a the inherit pattern
const ButtonB = (props) => {
    const { title, state } = props;
    let className = 'ds-buttonB ' + 'button-b-' + state;
    return (react_1.default.createElement("button", Object.assign({ className: className }, props), title));
};
exports.ButtonB = ButtonB;
//# sourceMappingURL=ButtonB.js.map