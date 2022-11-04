import { __assign } from '../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { createElement } from 'react';
import Text from '../../atoms/Text/Text.js';

var SelectItem = function (_a) {
    var isSelected = _a.isSelected, isHightlighted = _a.isHightlighted, ref = _a.ref, option = _a.option, optionIndex = _a.optionIndex, onOptionDown = _a.onOptionDown, highlightOption = _a.highlightOption, onOptionSelect = _a.onOptionSelect, renderOption = _a.renderOption;
    var renderOptionProps = {
        key: option.value,
        ref: ref,
        option: option,
        isSelected: isSelected,
        getOptionRecommendedProps: function (overrideProps) {
            if (overrideProps === void 0) { overrideProps = {}; }
            return (__assign({ ref: ref, role: 'menuitemradio', 'aria-checked': isSelected ? -1 : 0, 'aria-label': option.label, onKeyDown: onOptionDown, tabIndex: isHightlighted ? -1 : 0, onMouseEnter: function () { return highlightOption(optionIndex); }, onMouseLeave: function () { return highlightOption(null); }, className: "dse-select__option ".concat(isSelected ? 'dse-select__option--selected' : '', " ").concat(isHightlighted ? 'dse-select__option--hightlighted' : ''), key: option.value, onClick: function () { return (onOptionSelect(option, optionIndex)); } }, overrideProps));
        },
    };
    if (renderOption) {
        renderOption(renderOptionProps);
    }
    return (createElement("li", __assign({}, renderOptionProps.getOptionRecommendedProps(), { key: renderOptionProps.option.value }),
        jsx(Text, { children: option.label }),
        isSelected
            ? (jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", width: "1rem", height: "1rem" }, { children: jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }) })))
            : null));
};

export { SelectItem as default };
//# sourceMappingURL=SelectItem.js.map
