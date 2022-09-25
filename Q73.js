/*Write a function parseFirstInt that takes a string and returns the first integer present in the string. If the string does not contain an integer, you should get NaN.

Example: parseFirstInt('No. 10') should return 10 and parseFirstInt('Babylon') should return NaN */

function parseFirstInt(x){
    let fi = x;

    for(let i = 0; i < x.length; i++){
        let fi2 = parseInt(fi);
        console.log(fi2);

        if(!Number.isNaN(fi2)){
            return fi2;
        }
        fi = fi.substr(1);//first letter of the string is checked so it is removed and the string from index 1 is extracted;
    }
    return NaN;
}

//let r = parseFirstInt("No. 10");
//console.log(r);
