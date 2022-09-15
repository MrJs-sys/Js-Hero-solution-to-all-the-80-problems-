/*Write a function concatUp that concatenate two arrays. The longer array should be appended to the shorter array. If both arrays are equally long, the second array should be appended to the first array.

Example: concatUp([1, 2], [3]) should return [3, 1, 2] and concatUp([5, 7], [6, 8]) should return [5, 7, 6, 8]
*/

function concatUp(x,y){
    if(x.length>y.length){
    return y.concat(x)
    }
    else (x.length === y.length)
    {
    return x.concat(y);
    }
    }