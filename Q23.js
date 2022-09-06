/*Write a function indexOfIgnoreCase taking two strings and determining the first occurrence of the second string in the first string. The function should be case insensitive.

Example: indexOfIgnoreCase('bit','it') and indexOfIgnoreCase('bit','IT') should return 1.
 */

function indexOfIgnoreCase(x,y){
    let u = x.toUpperCase();
    let l = y.toUpperCase();
    return u.indexOf(l);
}