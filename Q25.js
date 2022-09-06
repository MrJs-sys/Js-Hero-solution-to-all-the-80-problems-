/*Write a function firstWord, taking a string and returning the first word in that string. The first word are all characters up to the first space.

Example: firstWord('see and stop') should return 'see'.*/

function firstWord(x){
    let fb = x.indexOf(" ");
    return x.substr(0,fb); //char at "3" will not be counted
}