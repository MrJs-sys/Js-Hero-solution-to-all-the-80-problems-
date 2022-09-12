/*Write a function equals that checks two values for strict equality. If the two values are equal, the string 'EQUAL' should be returned. If they are unequal, you should get 'UNEQUAL'.

Example: equals(1, 1) should return 'EQUAL' and equals(1, 2) should return 'UNEQUAL'.
 */
function equals(x, y) {
    let result = 'UNEQUAL';
    if (x === y) {
      result = 'EQUAL';
    }
    return result;
  }