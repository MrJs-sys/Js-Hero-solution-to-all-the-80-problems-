/*Write a function unequal that checks 3 values for strict inequality. The function should return true if all three parameters are strict unequal. Otherwise false.

Example: unequal(1, 2, 3) should return true and unequal(1, 1, 2) should return false.
*/

function unequal(x,y,z){
    return x!==y && y!==z && z!==x;
}