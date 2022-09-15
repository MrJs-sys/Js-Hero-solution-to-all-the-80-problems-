/*Write a function rotate that rotates the elements of an array. All elements should be moved one position to the left. The 0th element should be placed at the end of the array. The rotated array should be returned.

Example: rotate(['a', 'b', 'c']) should return ['b', 'c', 'a']
 */

function rotate(x){
    let fs = x.shift();
    x.push(fs);
    return x;
}