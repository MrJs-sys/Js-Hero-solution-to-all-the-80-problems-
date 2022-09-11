/*Write a function add that takes a string with a summation task and returns its result as a number. Two natural numbers should be added. The summation task is a string of the form '102+17'.

Example: add('102+17') should return 119.
*/

function add(x){
    let fnum = parseInt(x, 10);
    let y = x.indexOf("+");
    let z = x.substr(y);
    let snum = parseInt(z);

    return fnum+snum;
}
