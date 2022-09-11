/*Write a function xor that takes two Boolean values. If both values are different, the result should be true. If both values are the same, the result should be false.

I.e.: The calls xor(true, false) and xor(false, true) should return true. The calls xor(true, true) and xor(false, false) should return false.*/

function xor(x,y){
    return (x||y) && (!(x&&y));
}