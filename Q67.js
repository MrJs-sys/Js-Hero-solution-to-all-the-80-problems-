/* Write a function spaces that takes a natural number n and returns a string of n spaces.

Example: spaces(1) should return ' '.
*/

function spaces(x){

    let spa="";
     while(spa.length < x){
      spa= spa + " ";
     }
    return spa;
}

/*function whipa(x){
    let i = 0;
    while(i<x){
        i++;
        console.log(i);
    }
    return i;
}

let count = whipa(6);*/
