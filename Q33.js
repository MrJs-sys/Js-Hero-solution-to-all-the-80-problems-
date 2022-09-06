/*Write a function midrange, that calculates the midrange of 3 numbers. The midrange is the mean of the smallest and largest number.

Example: midrange(3, 9, 1) should return (9+1)/2 = 5.
 */

function midrange(x,y,z){
    let min = Math.min(x,y,z);
    let max = Math.max(x,y,z);

    return (min + max)/2;
}