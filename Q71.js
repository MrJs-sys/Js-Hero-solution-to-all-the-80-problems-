/*Write a function sum that calculates the sum of all elements of a two-dimensional array.

Example: sum([[1, 2], [3]]) should return 6. */


function sum(x){
    let sum = 0;
    for(let i = 0; i<x.length; i++){
        for(let j = 0; i<x[i].length; j++){
            sum = sum + x[i][j];
        }
    }
    return sum;
}