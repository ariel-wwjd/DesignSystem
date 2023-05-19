import React, { FunctionComponent } from 'react';
import { IButtonProps, OverrideProps } from './types';

const Button: FunctionComponent<IButtonProps> = ({ children, backgroundColor, color, style, overrideProps = {} }) => {
    // let _style: CSSProperties = style || {};

    const renderProps = {
        recommendedProps: (overrideProps: OverrideProps) => ({
            className: 'dse-button',
            ...overrideProps,
            style: {
                color: color,
                backgroundColor: backgroundColor,
                ...overrideProps?.style
            }
        })
    };

    return (
        <button
            {...renderProps.recommendedProps(overrideProps)}
            // className='dse-button'
            // style={_style}
            // {...props}
        >
            {children}
        </button>
    );
};

export { Button };

// import React, { FunctionComponent, CSSProperties } from 'react';
// import { IButtonProps } from './types';

// const Button: FunctionComponent<IButtonProps> = (props) => {
//     const { children, backgroundColor, color, style } = props;

//     let _style: CSSProperties = style || {};

//     if (backgroundColor) {
//         _style.backgroundColor = backgroundColor;
//     }

//     if (color) {
//         _style.color = color;
//     }

//     return (
//         <button style={_style} {...props}>
//             {children}
//         </button>
//     );
// };

// export { Button };
