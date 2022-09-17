/*Write a function median that takes an array of ascending numbers and returns the median of that numbers.

Example: median([1, 2, 10]) should return 2 and median([1, 2, 10, 100]) should return 6.
 */

function median(x){
    let count = x.length;
    if(count%2 !== 0){
        return x[Math.floor(count/2)];
    }
    else{
        return (x[count/2]+x[(count/2)-1])/2;
    }
}

/*let arr = median([1,2]);
console.log(arr);*/