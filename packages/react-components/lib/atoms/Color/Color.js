import { __assign } from '../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { Spacing } from '@design-system/foundation';

var Color = function (_a) {
    var _b = _a.hexCode, hexCode = _b === void 0 ? '#bbbbbb' : _b, _c = _a.width, width = _c === void 0 ? Spacing.sm : _c, _d = _a.height, height = _d === void 0 ? Spacing.sm : _d, _e = _a.overrideProps, overrideProps = _e === void 0 ? {} : _e;
    var classNames = "dse-width-".concat(width, " dse-height-").concat(height);
    var renderProps = {
        recommendedProps: function (overrideProps) { return (__assign(__assign({ className: classNames }, overrideProps), { style: __assign({ backgroundColor: hexCode }, overrideProps === null || overrideProps === void 0 ? void 0 : overrideProps.style) })); }
    };
    return (jsx("div", __assign({}, renderProps.recommendedProps(overrideProps))));
};

export { Color as default };
//# sourceMappingURL=Color.js.map
