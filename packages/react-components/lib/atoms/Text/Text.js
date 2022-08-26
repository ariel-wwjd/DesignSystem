import { __assign } from '../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';

var Text = function (_a) {
    var size = _a.size, children = _a.children;
    var classNames = "dse-text dse-text-".concat(size);
    return (jsx("p", __assign({ className: classNames }, { children: children })));
};

export { Text as default };
//# sourceMappingURL=Text.js.map
