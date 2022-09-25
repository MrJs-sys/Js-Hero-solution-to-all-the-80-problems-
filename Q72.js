/*Write a function max that calculates the maximum of an arbitrary number of numbers.

Example: max(1, 2) should return 2 and max(2, 3, 1) should return 3. */

function max(){
    let mmx = 0
    for(let i = 0; i<arguments.length; i++){
        if(mmx<arguments[i]){
            mmx = arguments[i]; 
        }
    }
    return mmx;
}
