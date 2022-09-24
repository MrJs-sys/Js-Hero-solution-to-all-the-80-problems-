/* Write a function isPrime that checks whether a passed number is prime. In case of a prime number it should return true, otherwise false.

Example: isPrime(7) should return true and isPrime(8) should return false.
*/

/*function isPrime(x){

    let count = x%2;
    console.log(count);
    if(count == 0){
    return false;
    }
    else{
    return true;
    }
    }*/

function isPrime(x){
    let count = 0, i, prime;
    for(i = 1; i<=x; i++){
        if(x%i == 0){
            count ++;
        }
    }
    if(count == 2){
        prime = true;
    }
    else{
        prime = false;
    }
    return prime;
}

    /*function isPrime(x){
    var sqrtx=Math.floor(Math.sqrt(x));
    console.log(Math.sqrt(x));
    var prime = x != 1;
    console.log(prime);
    for(var i = 2; i<sqrtx+1 ; i++){
        console.log("X = "+x+" i= "+i);
        if(x % i == 0){
            prime = false;
            break;
        }
    }
    return prime;
}

let y = isPrime(12345678909876);
console.log(y);*/