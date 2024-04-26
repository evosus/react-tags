/**
 * Convert an array of delimiter characters into a regular expression
 * that can be used to split content by those delimiters.
 * @param {Array<char>} delimiters Array of characters to turn into a regex
 * @returns {RegExp} Regular expression
 */
export declare function buildRegExpFromDelimiters(delimiters: Array<number>): RegExp;
/**
 * Returns true when the tag is drag enabled
 * @param {object} params props of the tag element
 * @returns {boolean} true/false
 * The three different properties which controls this function are moveTag, readOnly and allowDragDrop.
 */
export declare function canDrag(params: {
    moveTag?: (dragIndex: number, hoverIndex: number) => void;
    readOnly: boolean;
    allowDragDrop: boolean;
}): boolean;
/**
 * Returns true when the tag is drop enabled
 * @param {object} params props of the tag element
 * @returns {boolean} true/false
 * The two different properties which controls this function are readOnly and allowDragDrop.
 */
export declare function canDrop(params: {
    readOnly: boolean;
    allowDragDrop: boolean;
}): boolean;
