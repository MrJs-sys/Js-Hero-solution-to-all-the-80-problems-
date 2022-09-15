/*Write a function add that adds an element to the end of an array. However, the element should only be added if it is not already in the array.

Example: add([1, 2], 3) should return [1, 2, 3] and add([1, 2], 2) should return [1, 2]
 */

function add(x,y){
    let i = x.indexOf(y);
    if(i == -1){
        x.push(y);
    }
    return x;
}