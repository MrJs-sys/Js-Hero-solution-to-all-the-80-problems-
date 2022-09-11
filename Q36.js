/*Write a function dice that returns like a dice a random number between 1 and 6
*/

function dice(){
    return Math.ceil(Math.random()*6);
}

//here we multiply the highest value of choice with Math.random(), to get a range from 0 to highest values of choice
/* i.e:- If we need value from 0-3 we multiply with 3, we need 0-7 we multiply with 7, we need 9 we multiply with 9.*/