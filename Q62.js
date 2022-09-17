/*Write a function hello having one parameter and returning 'Hello <parameter>!'. If hello is called without an argument, 'Hello world!' should be returned.

Example: hello('Nala') should return 'Hello Nala!'.*/

function hello(name) {
    if(name === undefined){
        return "Hello world!";
    }
    else return "Hello " + name + "!";
}

//console.log(hello());