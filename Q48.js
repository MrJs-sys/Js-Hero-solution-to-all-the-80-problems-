/*Write a function addWithSurcharge that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10, the surcharge is 2.

Example: addWithSurcharge(5, 15) should return 23.*/

function addWithSurcharge(x,y){
    if(x<=10){
        var amt = x+1;
    }
    else{
        amt = x+2;
    }

    if(y<=10){
        var yamt = y+1;
    }
    else{
        yamt = y+2
    }

    return amt + yamt;
}


/* calling of function
let surcharge = addWithSurcharge(5,15);
console.log(surcharge);
*/

/*alternative approach

function addWithSurcharge(x,y){
    let surcharge = 0;

    if(x<=10){
        surcharge = surcharge + 1;
    }
    else{
        surcharge = surcharge + 2;
    }
    
    if(y<=10){
        surcharge = surcharge +1;
    }
    else{
        surcharge = surcharge + 2;
    }

    return x + y + surcharge;
}
*/