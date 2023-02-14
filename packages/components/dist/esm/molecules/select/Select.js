import React from 'react';
import { createRef, useEffect, useRef, useState } from 'react';
import { KEY_CODES, getNextOptionIndex, getPreviousOptionIndex } from './utilities';
import { Text } from '../../atoms/text';
import { SelectItem } from '../select-item';
const Select = ({ options = [], label = 'Select an option', onOptionSelect: handler, renderOption }) => {
    var _a;
    const [isOpen, setIsOpen] = useState(false);
    const [overlayTop, setOverlayTop] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [hightlightedIndex, setHightlightedIndex] = useState(null);
    const [optionsRefs, setOptionRefs] = useState([]);
    const labelRef = useRef(null);
    const classNames = `dse-select`;
    useEffect(() => {
        var _a;
        setOverlayTop((((_a = labelRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0) + 10);
    }, [(_a = labelRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight]);
    useEffect(() => {
        setOptionRefs(options.map((_) => createRef()));
    }, [options]);
    useEffect(() => {
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
        if ([KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.ARROW_DOWN].includes(event.code)) {
            setIsOpen(true);
            highlightOption(0);
        }
    };
    const onOptionDown = (event) => {
        switch (event.code) {
            case KEY_CODES.ESCAPE:
                setIsOpen(false);
                break;
            case KEY_CODES.ARROW_DOWN:
                highlightOption(getNextOptionIndex(hightlightedIndex, options));
                break;
            case KEY_CODES.ARROW_UP:
                highlightOption(getPreviousOptionIndex(hightlightedIndex, options));
                break;
            case KEY_CODES.ENTER:
                onOptionSelect(options[hightlightedIndex], hightlightedIndex);
                break;
            default:
                break;
        }
    };
    return (React.createElement("div", { className: classNames },
        React.createElement("button", { onKeyDown: onButtonKeyDown, "aria-haspopup": true, "aria-expanded": isOpen ? true : undefined, "aria-controls": "dse-select-list", className: "dse-select__label", onClick: () => onLabelClick(), ref: labelRef, "data-testid": "DseSelectButton" },
            React.createElement(Text, null, selectedIndex === null ? label : options[selectedIndex].label),
            React.createElement("svg", { className: `dse-select__caret ${isOpen ? 'dse-select__caret--open' : 'dse-select__caret--close'}`, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "{1.5}", stroke: "currentColor", width: "1rem", height: "1rem" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }))),
        isOpen ? (React.createElement("ul", { role: "menu", style: { top: overlayTop }, className: "dse-select__overlay", id: "dse-select-list" }, options.map((option, optionIndex) => {
            return (React.createElement(SelectItem, { isSelected: selectedIndex === optionIndex, isHightlighted: hightlightedIndex === optionIndex, ref: optionsRefs[optionIndex], option: option, optionIndex: optionIndex, onOptionDown: onOptionDown, highlightOption: highlightOption, onOptionSelect: onOptionSelect, renderOption: renderOption }));
        }))) : null));
};
export { Select };
//# sourceMappingURL=Select.js.map