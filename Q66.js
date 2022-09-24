/* Write a function mean that accepts an array filled with numbers and returns the arithmetic mean of those numbers.

Example: mean([1, 2, 3]) should return (1+2+3)/3 = 2. 
*/

function mean(x){
    let sum = 0;
    for (let i = 0; i<x.length; i++){
        sum = sum + x[i];
    }
    return sum/x.length;
}
