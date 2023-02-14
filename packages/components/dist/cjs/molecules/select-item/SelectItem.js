"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectItem = void 0;
const text_1 = require("../../atoms/text");
const react_1 = __importDefault(require("react"));
const SelectItem = ({ isSelected, isHightlighted, ref, option, optionIndex, onOptionDown, highlightOption, onOptionSelect, renderOption }) => {
    const renderOptionProps = {
        key: option.value,
        ref,
        option,
        isSelected,
        getOptionRecommendedProps: (overrideProps = {}) => (Object.assign({ ref, role: 'menuitemradio', 'aria-checked': isSelected ? -1 : 0, 'aria-label': option.label, onKeyDown: onOptionDown, tabIndex: isHightlighted ? -1 : 0, onMouseEnter: () => highlightOption(optionIndex), onMouseLeave: () => highlightOption(null), className: `dse-select__option ${isSelected ? 'dse-select__option--selected' : ''} ${isHightlighted ? 'dse-select__option--hightlighted' : ''}`, key: option.value, onClick: () => onOptionSelect(option, optionIndex) }, overrideProps))
    };
    if (renderOption) {
        renderOption(renderOptionProps);
    }
    return (react_1.default.createElement("li", Object.assign({}, renderOptionProps.getOptionRecommendedProps(), { key: renderOptionProps.option.value }),
        react_1.default.createElement(text_1.Text, null, option.label),
        isSelected ? (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", width: "1rem", height: "1rem" },
            react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }))) : null));
};
exports.SelectItem = SelectItem;
//# sourceMappingURL=SelectItem.js.map