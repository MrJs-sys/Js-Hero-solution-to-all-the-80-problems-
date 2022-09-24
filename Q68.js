/* Write a function lcm that takes two natural numbers and calculates their least common multiple (lcm). The lcm of two natural numbers a und b is the smallest natural number that is divisible by a and b.

Example: lcm(4, 6) should return 12.
*/

function lcm(x,y){
    let i = 1;
    do{
        if(i%x==0 && i%y ==0){
            break;
        }
        i++;
    }while(i<x*y);
    return i;
    }

    //let ans=lcm(6,8);

    //same thing using foor loop so that we can get the concept;

    /*function lcm(x,y){
        let i
        for(i = 1; i<x*y; i++){
            if(i%x === 0 && i%y === 0){
            break;
            }
        }
        return i;
    }*/

//third approach;
    /*function lcm(x,y){
        let i = 1;
        while(i<x*y){
            i++;
            if(i%x == 0 && i%y == 0){
                break;
            }
        }
        return i;
    }

    let fir = lcm(2,3);
    console.log(fir);*/

