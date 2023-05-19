import React from 'react';
// this is a test Button for a component that uses a the inherit pattern
const ButtonB = (props) => {
    const { title, state } = props;
    let className = 'ds-buttonB ' + 'button-b-' + state;
    return (React.createElement("button", Object.assign({ className: className }, props), title));
};
export { ButtonB };
//# sourceMappingURL=ButtonB.js.map