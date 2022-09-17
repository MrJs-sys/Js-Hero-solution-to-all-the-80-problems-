/*Write a function addTo that accepts a number as a parameter and adds all natural numbers smaller or equal than the parameter. The result is to be returned.

Example: addTo(3) should return 1+2+3 = 6.
*/

function addTo(x){
    let sum = 0;
    for(let i = 0; i <= x; i++){
        sum = sum + i;
    }
    return sum;
}
