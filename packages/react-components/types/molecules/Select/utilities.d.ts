import { SelectOption } from "./types";
declare const KEY_CODES: {
    ENTER: string;
    SPACE: string;
    ARROW_DOWN: string;
    ARROW_UP: string;
    ESCAPE: string;
};
declare const getNextOptionIndex: (currentIndex: number | null, options: Array<SelectOption>) => number;
declare const getPreviousOptionIndex: (currentIndex: number | null, options: Array<SelectOption>) => number;
export { KEY_CODES, getNextOptionIndex, getPreviousOptionIndex, };
