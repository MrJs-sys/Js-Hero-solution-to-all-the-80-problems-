/*Write a function list that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'. An empty array should return an empty string.

Example: list(['Huey', 'Dewey', 'Louie']) should return 'Huey, Dewey and Louie'. 
*/

function list(x){
    if(x.length === 0){
        return "";
    }
    else if(x.length === 1){
        return x[0];
    }
    else{
        let b4last = x.slice(0,x.length-1);
        let last = x[x.length-1];

        return b4last.join(', ')+ " and " + last; 
    }
}

