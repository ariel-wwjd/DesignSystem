"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const utilities_1 = require("./utilities");
const text_1 = require("../../atoms/text");
const select_item_1 = require("../select-item");
const Select = ({ options = [], label = 'Select an option', onOptionSelect: handler, renderOption }) => {
    var _a;
    const [isOpen, setIsOpen] = (0, react_2.useState)(false);
    const [overlayTop, setOverlayTop] = (0, react_2.useState)(0);
    const [selectedIndex, setSelectedIndex] = (0, react_2.useState)(null);
    const [hightlightedIndex, setHightlightedIndex] = (0, react_2.useState)(null);
    const [optionsRefs, setOptionRefs] = (0, react_2.useState)([]);
    const labelRef = (0, react_2.useRef)(null);
    const classNames = `dse-select`;
    (0, react_2.useEffect)(() => {
        var _a;
        setOverlayTop((((_a = labelRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0) + 10);
    }, [(_a = labelRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight]);
    (0, react_2.useEffect)(() => {
        setOptionRefs(options.map((_) => (0, react_2.createRef)()));
    }, [options]);
    (0, react_2.useEffect)(() => {
        if (hightlightedIndex !== null && isOpen) {
            const ref = optionsRefs[hightlightedIndex];
            if (ref && ref.current) {
                ref.current.focus();
            }
        }
    }, [isOpen, hightlightedIndex, optionsRefs]);
    const onOptionSelect = (option, optionIndex) => {
        if (handler) {
            handler(option, optionIndex);
        }
        setSelectedIndex(optionIndex);
        setIsOpen(false);
    };
    const onLabelClick = () => {
        setIsOpen(!isOpen);
    };
    const highlightOption = (optionIndex) => {
        setHightlightedIndex(optionIndex);
    };
    const onButtonKeyDown = (event) => {
        event.preventDefault();
        if ([utilities_1.KEY_CODES.ENTER, utilities_1.KEY_CODES.SPACE, utilities_1.KEY_CODES.ARROW_DOWN].includes(event.code)) {
            setIsOpen(true);
            highlightOption(0);
        }
    };
    const onOptionDown = (event) => {
        switch (event.code) {
            case utilities_1.KEY_CODES.ESCAPE:
                setIsOpen(false);
                break;
            case utilities_1.KEY_CODES.ARROW_DOWN:
                highlightOption((0, utilities_1.getNextOptionIndex)(hightlightedIndex, options));
                break;
            case utilities_1.KEY_CODES.ARROW_UP:
                highlightOption((0, utilities_1.getPreviousOptionIndex)(hightlightedIndex, options));
                break;
            case utilities_1.KEY_CODES.ENTER:
                onOptionSelect(options[hightlightedIndex], hightlightedIndex);
                break;
            default:
                break;
        }
    };
    return (react_1.default.createElement("div", { className: classNames },
        react_1.default.createElement("button", { onKeyDown: onButtonKeyDown, "aria-haspopup": true, "aria-expanded": isOpen ? true : undefined, "aria-controls": "dse-select-list", className: "dse-select__label", onClick: () => onLabelClick(), ref: labelRef, "data-testid": "DseSelectButton" },
            react_1.default.createElement(text_1.Text, null, selectedIndex === null ? label : options[selectedIndex].label),
            react_1.default.createElement("svg", { className: `dse-select__caret ${isOpen ? 'dse-select__caret--open' : 'dse-select__caret--close'}`, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "{1.5}", stroke: "currentColor", width: "1rem", height: "1rem" },
                react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }))),
        isOpen ? (react_1.default.createElement("ul", { role: "menu", style: { top: overlayTop }, className: "dse-select__overlay", id: "dse-select-list" }, options.map((option, optionIndex) => {
            return (react_1.default.createElement(select_item_1.SelectItem, { isSelected: selectedIndex === optionIndex, isHightlighted: hightlightedIndex === optionIndex, ref: optionsRefs[optionIndex], option: option, optionIndex: optionIndex, onOptionDown: onOptionDown, highlightOption: highlightOption, onOptionSelect: onOptionSelect, renderOption: renderOption }));
        }))) : null));
};
exports.Select = Select;
//# sourceMappingURL=Select.js.map