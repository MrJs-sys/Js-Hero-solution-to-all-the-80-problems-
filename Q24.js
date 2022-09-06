/*Write a function secondIndexOf, taking two strings and determining the second occurrence of the second string in the first string. If the search string does not occur twice, -1 should be returned.

Example: secondIndexOf('White Rabbit', 'it') should return 10.
*/

function secondIndexOf(x,y){
    let fi = x.indexOf(y);
    
    //the indexOf function might have 2 parameters (the text to be found, the number from where to start count)

    /*(suppose the text is white rabbit)
    here, let FI = 'whiteRabbit'.indexOf('it') => 2
    so we got the index of our first 'it' in the string.
    now, FI = 2;
        so FI + 1 = 2 + 1 => 3 (so 3 the the index which we will start our count from.)

        finally, 'whiteRabbit'.indexOf('it', FI + 1); => 9;
    */
    
    return x.indexOf(y, fi+1);
}