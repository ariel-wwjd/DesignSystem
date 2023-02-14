import React from 'react';
import { TextProps, OverrideProps } from './types';

const Text: React.FC<TextProps> = ({ children, size = 'base', weight = 'normal', textColor = '#000000bab', overrideProps = {} }) => {
    const classNames = `dse-text dse-text-${size} dse-text-${String(weight)}`;

    const renderProps = {
        recommendedProps: (overrideProps: OverrideProps) => ({
            className: classNames,
            ...overrideProps,
            style: {
                color: textColor,
                ...overrideProps?.style
            }
        })
    };

    return <p {...renderProps.recommendedProps(overrideProps)}>{children}</p>;
};

export { Text };
