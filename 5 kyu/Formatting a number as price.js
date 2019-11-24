/* DESCRIPTION
Your objective is to add formatting to a plain number to display it as price.

The function should return a string like this:

var price = numberToPrice(13253.5123);
console.log(price); // 13,253.51
Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

function should return a string 'NaN' if the input is not a valid number
*/

/* TESTS
Test.assertEquals(numberToPrice(1500.129),   '1,500.12');
Test.assertEquals(numberToPrice(-5),         '-5.00');
Test.assertEquals(numberToPrice(1000000.5),  '1,000,000.50');
Test.assertEquals(numberToPrice('@'),        'NaN');
*/

let numberToPrice = function(number) {
  // Check for number
  if (isFinite(number) == true && typeof number == "number") {
    number += "";
    let arrayNumber = number.split(".");
    let numberWithComma = "";
    // Second part of number with comma
    if (arrayNumber[1] != undefined) {
      if (arrayNumber[1].length > 2) {
        arrayNumber[1] = arrayNumber[1][0] + arrayNumber[1][1];
      } else if (arrayNumber[1].length == 1) {
        arrayNumber[1] = arrayNumber[1][0] + "0";
      }
    } else {
      arrayNumber[1] = "00";
    }
    // First part of number with comma
    if (+arrayNumber[0] < 0) {
      numberWithComma += arrayNumber[0][0];
      arrayNumber[0] = arrayNumber[0].slice(1, arrayNumber[0].length);
      if (arrayNumber[0].length % 3 != 0) {
        numberWithComma += arrayNumber[0].slice(0, arrayNumber[0].length % 3);
        arrayNumber[0] = arrayNumber[0].slice(
          arrayNumber[0].length % 3,
          arrayNumber[0].length
        );
      }
      for (
        let i = Math.floor(arrayNumber[0].length / 3);
        i > 0 && arrayNumber[0].length != 0;
        i--
      ) {
        if (numberWithComma.length == 1) {
          numberWithComma += arrayNumber[0].slice(0, 3);
          arrayNumber[0] = arrayNumber[0].slice(3, arrayNumber[0].length);
        }
        if (arrayNumber[0].length != 0) {
          numberWithComma += "," + arrayNumber[0].slice(0, 3);
          arrayNumber[0] = arrayNumber[0].slice(3, arrayNumber[0].length);
        }
      }

      return numberWithComma + "." + arrayNumber[1];
    } else {
      if (arrayNumber[0].length % 3 != 0) {
        numberWithComma += arrayNumber[0].slice(0, arrayNumber[0].length % 3);
        arrayNumber[0] = arrayNumber[0].slice(
          arrayNumber[0].length % 3,
          arrayNumber[0].length
        );
      }
      for (let i = Math.floor(arrayNumber[0].length / 3); i > 0; i--) {
        if (numberWithComma.length == 0) {
          numberWithComma += arrayNumber[0].slice(0, 3);
          arrayNumber[0] = arrayNumber[0].slice(3, arrayNumber[0].length);
        }
        if (arrayNumber[0].length != 0) {
          numberWithComma += "," + arrayNumber[0].slice(0, 3);
          arrayNumber[0] = arrayNumber[0].slice(3, arrayNumber[0].length);
        }
      }

      return numberWithComma + "." + arrayNumber[1];
    }
  } else {
    return "NaN";
  }
};
