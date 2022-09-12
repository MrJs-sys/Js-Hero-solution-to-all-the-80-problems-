/*Write a function repdigit that determines whether a two-digit decimal is a repdigit or not. If the decimal is a repdigit, 'Repdigit!' should be returned, otherwise 'No Repdigit!'.

Example: repdigit(22) should return 'Repdigit!' and repdigit(23) should return 'No Repdigit!'.
*/

function repdigit(x){
    let ones = x%10;
    let tens = Math.floor(x/10);

    if(ones === tens){
        return "Repdigit!"
    }
    return "No Repdigit!"
}

/* Second method using parseInt()----------------------------------------------------------------
repdigit = (x) => {
    let r = x%10;
    console.log(r);
    x = parseInt(x/10);

    console.log(x);
    if(r === x){
        return "Repdigit!";
    }
    return "No Repdigit!";
}

let z = repdigit(11);
console.log(z);
*/