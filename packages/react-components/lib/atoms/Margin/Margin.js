import { __assign } from '../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';

var Margin = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'xxxs' : _b, side = _a.side, children = _a.children, _c = _a.overrideProps, overrideProps = _c === void 0 ? {} : _c;
    var classNames = side ? "dse-margin-".concat(String(side), "-").concat(size) : "dse-margin-".concat(size);
    var renderProps = {
        recommendedProps: function (overrideProps) { return (__assign(__assign({ className: classNames }, overrideProps), { style: __assign({}, overrideProps === null || overrideProps === void 0 ? void 0 : overrideProps.style) })); }
    };
    return (jsx("div", __assign({}, renderProps.recommendedProps(overrideProps), { children: children })));
};

export { Margin as default };
//# sourceMappingURL=Margin.js.map
