import { SelectItemProps } from './types';
import { Text } from '../../atoms/text';
import React from 'react';

const SelectItem: React.FC<SelectItemProps> = ({ isSelected, isHightlighted, ref, option, optionIndex, onOptionDown, highlightOption, onOptionSelect, renderOption }) => {
    const renderOptionProps = {
        key: option.value,
        ref,
        option,
        isSelected,
        getOptionRecommendedProps: (overrideProps: any = {}) => ({
            ref,
            role: 'menuitemradio',
            'aria-checked': isSelected ? -1 : 0,
            'aria-label': option.label,
            onKeyDown: onOptionDown,
            tabIndex: isHightlighted ? -1 : 0,
            onMouseEnter: () => highlightOption(optionIndex),
            onMouseLeave: () => highlightOption(null),
            className: `dse-select__option ${isSelected ? 'dse-select__option--selected' : ''} ${isHightlighted ? 'dse-select__option--hightlighted' : ''}`,
            key: option.value,
            onClick: () => onOptionSelect(option, optionIndex),
            ...overrideProps
        })
    };

    if (renderOption) {
        renderOption(renderOptionProps);
    }

    return (
        <li {...renderOptionProps.getOptionRecommendedProps()} key={renderOptionProps.option.value}>
            <Text>{option.label}</Text>
            {isSelected ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" width="1rem" height="1rem">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            ) : null}
        </li>
    );
};

export { SelectItem };
