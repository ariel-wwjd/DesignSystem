import { __assign } from '../../_virtual/_tslib.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import Text from '../../atoms/Text/Text.js';

var Select = function (_a) {
    var _b;
    var _c = _a.options, options = _c === void 0 ? [] : _c, _d = _a.label, label = _d === void 0 ? 'Select an option' : _d, handler = _a.onOptionSelect;
    var _e = useState(false), isOpen = _e[0], setIsOpen = _e[1];
    var _f = useState(0), overlayTop = _f[0], setOverlayTop = _f[1];
    var _g = useState(null), selectedIndex = _g[0], setSelectedIndex = _g[1];
    var labelRef = useRef(null);
    var classNames = "dse-select";
    useEffect(function () {
        var _a;
        setOverlayTop((((_a = labelRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0) + 10);
    }, [(_b = labelRef.current) === null || _b === void 0 ? void 0 : _b.offsetHeight]);
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
    return (jsxs("div", __assign({ className: classNames }, { children: [jsxs("button", __assign({ className: "dse-select__label", onClick: function () { return (onLabelClick()); }, ref: labelRef }, { children: [jsx(Text, { children: selectedIndex === null ? label : options[selectedIndex].label }), jsx("svg", __assign({ className: "dse-select__caret ".concat(isOpen ? 'dse-select__caret--open' : 'dse-select__caret--close'), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "{1.5}", stroke: "currentColor", width: "1rem", height: "1rem" }, { children: jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }) }))] })), isOpen ? (jsx("ul", __assign({ style: { top: overlayTop }, className: "dse-select__overlay" }, { children: options.map(function (option, optionIndex) {
                    var isSelected = selectedIndex === optionIndex;
                    return (jsxs("li", __assign({ className: "dse-select__option ".concat(isSelected
                            ? 'dse-select__option--selected'
                            : ''), onClick: function () { return (onOptionSelect(option, optionIndex)); } }, { children: [jsx(Text, { children: option.label }), isSelected
                                ? (jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", width: "1rem", height: "1rem" }, { children: jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }) })))
                                : null] }), option.value));
                }) }))) : null] })));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
