/*Write a function addWithSurcharge that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10 and less than or equal to 20, the surcharge is 2. For each amount greater than 20, the surcharge is 3.

Example: addWithSurcharge(10, 30) should return 44.
 */

function addWithSurcharge(x,y){
    let amt = 0;

    if(x<=10){
        amt = amt + 1; 
    }
    else if(x<=20){
        amt = amt + 2;
    }
    else{
        amt = amt +3;
    }

    
    if(y<=10){
        amt = amt + 1; 
    }
    else if(y<=20){
        amt = amt + 2;
    }
    else{
        amt = amt +3;
    }

    return x + y + amt;
}
/* function calls
let price = addWithSurcharge(10,30);
console.log(price);*/