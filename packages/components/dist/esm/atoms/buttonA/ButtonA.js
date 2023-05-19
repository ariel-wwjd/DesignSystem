import React from 'react';
// this is a test Button for a component that uses a the DS pattern
const ButtonA = ({ title, state, // 'primary' | 'secondary';
onClick, overrideProps = {} }) => {
    let classNames = 'ds-buttonA ' + 'button-a-' + state;
    const renderProps = {
        recommendedProps: (overrideProps) => (Object.assign(Object.assign({ className: overrideProps.className ? overrideProps.className : classNames }, overrideProps), { style: Object.assign({}, overrideProps === null || overrideProps === void 0 ? void 0 : overrideProps.style) }))
    };
    return (React.createElement("button", Object.assign({}, renderProps.recommendedProps(overrideProps), { onClick: onClick }), title));
};
export { ButtonA };
//# sourceMappingURL=ButtonA.js.map