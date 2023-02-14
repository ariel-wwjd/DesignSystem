import React, { FunctionComponent, CSSProperties } from 'react';
import { IButtonProps } from './types';

const Button: FunctionComponent<IButtonProps> = (props) => {
    const { children, backgroundColor, color, style } = props;

    let _style: CSSProperties = style || {};

    if (backgroundColor) {
        _style.backgroundColor = backgroundColor;
    }

    if (color) {
        _style.color = color;
    }

    return (
        <button style={_style} {...props}>
            {children}
        </button>
    );
};

export { Button };
