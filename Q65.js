/*Let us practice the for loop with the factorial used in mathematics. The factorial of a positive integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 3! = 1*2*3 = 6. By definition, 0! = 1.*/

function factorial(x){
    let pro = 1;

    for(let i = x; i>=1; i--){
        pro = pro * i;
    }
    return pro;
}

/*let fac = factorial(5);
console.log(fac);*/