import React, { useState } from 'react';
import { Button } from '../button';
const Counter = ({ label = 'Counter', phase = 1, start = 0 }) => {
    const [value, setValue] = useState(start);
    return (React.createElement("div", null,
        React.createElement("div", null, label),
        React.createElement("div", null, value),
        React.createElement(Button, { onClick: () => setValue(value + phase) }, "Increse")));
};
export { Counter };
//# sourceMappingURL=Counter.js.map