/*Write a function halve that copies the first half of an array. With an odd number of array elements, the middle element should belong to the first half.

Example: halve([1, 2, 3, 4]) should return [1, 2].*/

function halve(x){
    let arh = x.length;
    let half = Math.ceil(arh/2);
    return x.slice(0, half);
}
