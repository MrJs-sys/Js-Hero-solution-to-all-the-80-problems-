/* Write a function setFirstElement that takes an array and an arbitrary variable. The variable should be inserted as the first element in the array. The array should be returned.

Example: setFirstElement([1, 2], 3) should return [3, 2].
*/

function setFirstElement(x,y){
    x[0] = y;
    return x;
}
