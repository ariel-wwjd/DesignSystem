import React, { FunctionComponent } from 'react';
import { IButtonAProps, OverrideProps } from './types';

// this is a test Button for a component that uses a the DS pattern
const ButtonA: FunctionComponent<IButtonAProps> = ({
    title,
    state, // 'primary' | 'secondary';
    onClick,
    overrideProps = {}
}) => {
    let classNames = 'ds-buttonA ' + 'button-a-' + state;

    const renderProps = {
        recommendedProps: (overrideProps: OverrideProps) => ({
            className: overrideProps.className ? overrideProps.className : classNames,
            ...overrideProps,
            style: {
                ...overrideProps?.style
            }
        })
    };

    return (
        <button {...renderProps.recommendedProps(overrideProps)} onClick={onClick}>
            {title}
        </button>
    );
};

export { ButtonA };
