import React from 'react';
import { Spacing } from '@design-system/foundation';
const Color = ({ hexCode = '#bbbbbb', width = Spacing.sm, height = Spacing.sm, overrideProps = {} }) => {
    const classNames = `dse-width-${width} dse-height-${height}`;
    const renderProps = {
        recommendedProps: (overrideProps) => (Object.assign(Object.assign({ className: classNames }, overrideProps), { style: Object.assign({ backgroundColor: hexCode }, overrideProps === null || overrideProps === void 0 ? void 0 : overrideProps.style) }))
    };
    return React.createElement("div", Object.assign({}, renderProps.recommendedProps(overrideProps)));
};
export { Color };
//# sourceMappingURL=Color.js.map