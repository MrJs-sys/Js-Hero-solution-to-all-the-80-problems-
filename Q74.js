/*Write a function add that takes a string with a summation task and returns its result as a number. A finite number of natural numbers should be added. The summation task is a string of the form '1+19+...+281'.

Example: add('7+12+100') should return 119.*/

function add(x){
    let nar = x.split("+");//nar is an array;
    nar = nar.map(Number);
    let sum = 0;
    for(let i = 0; i < nar.length; i++){
        sum = sum + nar[i];
    }
    return sum;
}