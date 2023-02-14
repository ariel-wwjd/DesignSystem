import { SelectOption } from './types';

const KEY_CODES = {
    ENTER: 'Enter',
    SPACE: 'Space',
    ARROW_DOWN: 'ArrowDown',
    ARROW_UP: 'ArrowUp',
    ESCAPE: 'Escape'
};

const getNextOptionIndex = (currentIndex: number | null, options: Array<SelectOption>) => {
    if (currentIndex === null || currentIndex === options.length - 1) {
        return 0;
    }
    return currentIndex + 1;
};

const getPreviousOptionIndex = (currentIndex: number | null, options: Array<SelectOption>) => {
    if (currentIndex === null) {
        return 0;
    }
    if (currentIndex === 0) {
        return options.length - 1;
    }
    return currentIndex - 1;
};

export { KEY_CODES, getNextOptionIndex, getPreviousOptionIndex };
