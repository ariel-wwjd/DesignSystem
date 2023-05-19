import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Color } from './Color';

test('render a color component', () => {
    const {} = render(<Color hexCode="black" />);

    screen.debug(); //debug prints the elements
    // screen.getAllByRole('');  //sync function
    // screen.findAllByRole('');  // async function
});
