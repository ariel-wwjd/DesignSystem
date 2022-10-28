import { __assign } from '../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';

var Text = function (_a) {
    var children = _a.children, _b = _a.size, size = _b === void 0 ? 'base' : _b, _c = _a.weight, weight = _c === void 0 ? 'normal' : _c, _d = _a.textColor, textColor = _d === void 0 ? '#000000bab' : _d, _e = _a.overrideProps, overrideProps = _e === void 0 ? {} : _e;
    var classNames = "dse-text dse-text-".concat(size, " dse-text-").concat(String(weight));
    var renderProps = {
        recommendedProps: function (overrideProps) { return (__assign(__assign({ className: classNames }, overrideProps), { style: __assign({ color: textColor }, overrideProps === null || overrideProps === void 0 ? void 0 : overrideProps.style) })); }
    };
    return (jsx("p", __assign({}, renderProps.recommendedProps(overrideProps), { children: children })));
};

export { Text as default };
//# sourceMappingURL=Text.js.map
