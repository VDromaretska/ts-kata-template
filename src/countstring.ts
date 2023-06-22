/*
INPUT:
arr - array of numbers and strings
---
OUTPUT:
counter - count of strings
-----


FOR EACH element of arr DO:
  IF typeOf(element) === string THEN:
    counter++
  END IF
END FOR

RETURN counter
*/

function countStrings(arr: (number | string)[]):number {
    let counter :number = 0;
    for (let element of arr) {
      if (typeof element === "string") {
        counter++;
      }
    }
    return counter;
  }
  
  export default countStrings;
  

  