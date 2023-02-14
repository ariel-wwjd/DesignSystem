"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPreviousOptionIndex = exports.getNextOptionIndex = exports.KEY_CODES = void 0;
const KEY_CODES = {
    ENTER: 'Enter',
    SPACE: 'Space',
    ARROW_DOWN: 'ArrowDown',
    ARROW_UP: 'ArrowUp',
    ESCAPE: 'Escape'
};
exports.KEY_CODES = KEY_CODES;
const getNextOptionIndex = (currentIndex, options) => {
    if (currentIndex === null || currentIndex === options.length - 1) {
        return 0;
    }
    return currentIndex + 1;
};
exports.getNextOptionIndex = getNextOptionIndex;
const getPreviousOptionIndex = (currentIndex, options) => {
    if (currentIndex === null) {
        return 0;
    }
    if (currentIndex === 0) {
        return options.length - 1;
    }
    return currentIndex - 1;
};
exports.getPreviousOptionIndex = getPreviousOptionIndex;
//# sourceMappingURL=utilities.js.map