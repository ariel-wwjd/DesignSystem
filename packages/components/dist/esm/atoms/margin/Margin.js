import React from 'react';
const Margin = ({ size = 'xxxs', side, children, overrideProps = {} }) => {
    const classNames = side ? `dse-margin-${String(side)}-${size}` : `dse-margin-${size}`;
    const renderProps = {
        recommendedProps: (overrideProps) => (Object.assign(Object.assign({ className: classNames }, overrideProps), { style: Object.assign({}, overrideProps === null || overrideProps === void 0 ? void 0 : overrideProps.style) }))
    };
    return React.createElement("div", Object.assign({}, renderProps.recommendedProps(overrideProps)), children);
};
export { Margin };
//# sourceMappingURL=Margin.js.map