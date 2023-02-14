import React, { RefObject } from 'react';
import { RenderOptionsProps } from '../Select/types';
interface SelectOption {
    label: string;
    value: string;
}
interface SelectItemProps {
    isSelected: boolean;
    isHightlighted: boolean;
    ref: RefObject<HTMLLIElement>;
    option: SelectOption;
    optionIndex: number;
    onOptionDown: (event: React.KeyboardEvent<HTMLElement>) => void;
    highlightOption: (optionIndex: number | null) => void;
    onOptionSelect: (option: SelectOption, optionIndex: number) => void;
    renderOption?: (props: RenderOptionsProps) => React.ReactNode;
}
export type { SelectItemProps };
