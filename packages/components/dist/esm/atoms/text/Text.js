import React from 'react';
const Text = ({ children, size = 'base', weight = 'normal', textColor = '#000000bab', overrideProps = {} }) => {
    const classNames = `dse-text dse-text-${size} dse-text-${String(weight)}`;
    const renderProps = {
        recommendedProps: (overrideProps) => (Object.assign(Object.assign({ className: classNames }, overrideProps), { style: Object.assign({ color: textColor }, overrideProps === null || overrideProps === void 0 ? void 0 : overrideProps.style) }))
    };
    return React.createElement("p", Object.assign({}, renderProps.recommendedProps(overrideProps)), children);
};
export { Text };
//# sourceMappingURL=Text.js.map