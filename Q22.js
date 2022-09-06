/*Write a function firstChar, which returns the first character that is not a space when a string is passed.

Example: firstChar(' Rosa Parks ') should return 'R'.
 */

function firstChar(input) {
    let trim = input.trim();
    return trim.charAt(0);
}