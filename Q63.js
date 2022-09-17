/*Write a function cutComment that takes one line of JavaScript and returns a possible line comment trimmed. If the line contains no line comment, null should be returned. For simplicity, we assume that the code does not contain the comment characters within a string.

Example: cutCommt('let foo; // bar') should return 'bar'.*/

function cutComment(x){
    let ind = x.indexOf("//");
    if(ind < 1){
        return null;
    }
    else{
        let ext = x.substr(ind+2);
        return ext.trim();
    }
}

/*let str = cutComment('hi there!');
console.log(str);*/
