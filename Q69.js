/*Write a function gcd that takes two natural numbers and calculates their gcd.

Example: gcd(6, 15) should return 3.*/

//GCD greatest means greatest common divisor which also means the same as HCF highest common factor.

function gcd(x,y){
    let i;
let hcf;
    for(i = 1; i <= x && i <= y; i++){
        if(x%i===0 && y%i===0){
            hcf = i;
        }
    }
    return hcf;
}