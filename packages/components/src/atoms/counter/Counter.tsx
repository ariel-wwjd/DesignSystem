import React, { FunctionComponent, useState } from 'react';
import { Button } from '../button';

import { ICounterProps } from './types';

const Counter: FunctionComponent<ICounterProps> = ({ label = 'Counter', phase = 1, start = 0 }) => {
    const [value, setValue] = useState<number>(start);

    return (
        <div>
            <div>{label}</div>
            <div>{value}</div>
            <Button onClick={() => setValue(value + phase)}>Increse</Button>
        </div>
    );
};

export { Counter };
