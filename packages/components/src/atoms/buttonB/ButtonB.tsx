import React, { FunctionComponent } from 'react';
import { IButtonBProps } from './types';

// this is a test Button for a component that uses a the inherit pattern
const ButtonB: FunctionComponent<IButtonBProps> = (props) => {
    const { title, state } = props;
    let className = 'ds-buttonB ' + 'button-b-' + state;

    return (
        <button className={className} {...props}>
            {title}
        </button>
    );
};

export { ButtonB };
