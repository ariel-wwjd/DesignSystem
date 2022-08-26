import { __assign } from '../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';

var Margin = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'xxxs' : _b, side = _a.side, children = _a.children;
    var classNames = side ? "dse-margin-".concat(side, "-").concat(size) : "dse-margin-".concat(size);
    return (jsx("div", __assign({ className: classNames }, { children: children })));
};

export { Margin as default };
//# sourceMappingURL=Margin.js.map
