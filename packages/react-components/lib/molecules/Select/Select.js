import { __assign } from '../../_virtual/_tslib.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect, createRef } from 'react';
import { KEY_CODES, getPreviousOptionIndex, getNextOptionIndex } from './utilities.js';
import Text from '../../atoms/Text/Text.js';
import SelectItem from '../SelectItem/SelectItem.js';

var Select = function (_a) {
    var _b;
    var _c = _a.options, options = _c === void 0 ? [] : _c, _d = _a.label, label = _d === void 0 ? 'Select an option' : _d, handler = _a.onOptionSelect, renderOption = _a.renderOption;
    var _e = useState(false), isOpen = _e[0], setIsOpen = _e[1];
    var _f = useState(0), overlayTop = _f[0], setOverlayTop = _f[1];
    var _g = useState(null), selectedIndex = _g[0], setSelectedIndex = _g[1];
    var _h = useState(null), hightlightedIndex = _h[0], setHightlightedIndex = _h[1];
    var _j = useState([]), optionsRefs = _j[0], setOptionRefs = _j[1];
    var labelRef = useRef(null);
    var classNames = "dse-select";
    useEffect(function () {
        var _a;
        setOverlayTop((((_a = labelRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0) + 10);
    }, [(_b = labelRef.current) === null || _b === void 0 ? void 0 : _b.offsetHeight]);
    useEffect(function () {
        setOptionRefs(options.map(function (_) { return (createRef()); }));
    }, [options]);
    useEffect(function () {
        if (hightlightedIndex !== null && isOpen) {
            var ref = optionsRefs[hightlightedIndex];
            if (ref && ref.current) {
                ref.current.focus();
            }
        }
    }, [isOpen, hightlightedIndex, optionsRefs]);
    var onOptionSelect = function (option, optionIndex) {
        if (handler) {
            handler(option, optionIndex);
        }
        setSelectedIndex(optionIndex);
        setIsOpen(false);
    };
    var onLabelClick = function () {
        setIsOpen(!isOpen);
    };
    var highlightOption = function (optionIndex) {
        setHightlightedIndex(optionIndex);
    };
    var onButtonKeyDown = function (event) {
        event.preventDefault();
        if ([KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.ARROW_DOWN].includes(event.code)) {
            setIsOpen(true);
            highlightOption(0);
        }
    };
    var onOptionDown = function (event) {
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
        }
    };
    return (jsxs("div", __assign({ className: classNames }, { children: [jsxs("button", __assign({ onKeyDown: onButtonKeyDown, "aria-haspopup": true, "aria-expanded": isOpen ? true : undefined, "aria-controls": 'dse-select-list', className: "dse-select__label", onClick: function () { return (onLabelClick()); }, ref: labelRef, "data-testid": 'DseSelectButton' }, { children: [jsx(Text, { children: selectedIndex === null ? label : options[selectedIndex].label }), jsx("svg", __assign({ className: "dse-select__caret ".concat(isOpen ? 'dse-select__caret--open' : 'dse-select__caret--close'), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "{1.5}", stroke: "currentColor", width: "1rem", height: "1rem" }, { children: jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }) }))] })), isOpen ? (jsx("ul", __assign({ role: 'menu', style: { top: overlayTop }, className: "dse-select__overlay", id: 'dse-select-list' }, { children: options.map(function (option, optionIndex) {
                    return (jsx(SelectItem, { isSelected: selectedIndex === optionIndex, isHightlighted: hightlightedIndex === optionIndex, ref: optionsRefs[optionIndex], option: option, optionIndex: optionIndex, onOptionDown: onOptionDown, highlightOption: highlightOption, onOptionSelect: onOptionSelect, renderOption: renderOption }));
                }) }))) : null] })));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
