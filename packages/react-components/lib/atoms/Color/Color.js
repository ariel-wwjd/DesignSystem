import { jsx } from 'react/jsx-runtime';
import { Spacing } from '@design-system/foundation';

var Color = function (_a) {
    var hexCode = _a.hexCode, _b = _a.width, width = _b === void 0 ? Spacing.sm : _b, _c = _a.height, height = _c === void 0 ? Spacing.sm : _c;
    var classNames = "dse-width-".concat(width, " dse-height-").concat(height);
    return (jsx("div", { className: classNames, style: {
            backgroundColor: hexCode,
        } }));
};

export { Color as default };
//# sourceMappingURL=Color.js.map
