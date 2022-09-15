/*Write a function flat that flattens a two-dimensional array with 3 entries.

Example: flat(loshu) should return [4, 9, 2, 3, 5, 7, 8, 1, 6]. Thereby loshu is the magic square from the example above.*/

function flat([x,y,z]){
    let first = x.concat(y);
    return first.concat(z);
    }

  /*  let newa = flat([[1,2,3,4,5],[93,99,98,97,96],[98,91,94,93,92]]);
    console.log(newa.sort());*/
