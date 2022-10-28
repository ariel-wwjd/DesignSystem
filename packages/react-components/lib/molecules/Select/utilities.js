var KEY_CODES = {
    ENTER: 'Enter',
    SPACE: 'Space',
    ARROW_DOWN: 'ArrowDown',
    ARROW_UP: 'ArrowUp',
    ESCAPE: 'Escape',
};
var getNextOptionIndex = function (currentIndex, options) {
    if (currentIndex === null || currentIndex === options.length - 1) {
        return 0;
    }
    return currentIndex + 1;
};
var getPreviousOptionIndex = function (currentIndex, options) {
    if (currentIndex === null) {
        return 0;
    }
    if (currentIndex === 0) {
        return options.length - 1;
    }
    return currentIndex - 1;
};

export { KEY_CODES, getNextOptionIndex, getPreviousOptionIndex };
//# sourceMappingURL=utilities.js.map
