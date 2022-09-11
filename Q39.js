/*Write a function nor that takes two Boolean values. If both values are false, the result should be true. In the other cases the return should be false.

I.e.: The call nor(false, false) should return true. The calls nor(true, false), nor(false, true) and nor(true, true) should return false.*/

function nor(x,y){
    return !(x||y);
}