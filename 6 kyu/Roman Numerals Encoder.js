/* DESCRIPTIONS
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/

/* TESTS
describe("solution", () => {
  it ("should handle small numbers", () => {
    Test.assertEquals(solution(1), 'I', '1 should, "I"')
    Test.assertEquals(solution(2), 'II', '2 should, "II"')
    Test.assertEquals(solution(3), 'III', '3 should, "III"')
    Test.assertEquals(solution(4), 'IV', '4 should, "IV"')
    Test.assertEquals(solution(5), 'V', '5 should, "V"')
    Test.assertEquals(solution(9), 'IX', '9 should, "IX"')
    Test.assertEquals(solution(10), 'X', '10 should, "X"')
    Test.assertEquals(solution(11), 'XI')
    Test.assertEquals(solution(19), 'XIX')
    Test.assertEquals(solution(22), 'XXII')
    Test.assertEquals(solution(15), 'XV')
  });
  
  it ("should handle large numbers", () => {
    Test.assertEquals(solution(1000), 'M', '1000 should, "M"')
    Test.assertEquals(solution(1001), 'MI', '1001 should, "MI"')
    Test.assertEquals(solution(1990), 'MCMXC', '1990 should, "MCMXC"')
    Test.assertEquals(solution(2007), 'MMVII', '2007 should, "MMVII"')
    Test.assertEquals(solution(2008), 'MMVIII', '2008 should, "MMVIII"')
  });
});
*/

function solution(number) {
  let result = "";
  let romainArray = [
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX"
  ];
  while (number != -1) {
    if (number / 1000 >= 1) {
      number -= 1000;
      result += "M";
    } else if (number / 900 >= 1) {
      number -= 900;
      result += "CM";
    } else if (number / 500 >= 1) {
      number -= 500;
      result += "D";
    } else if (number / 400 >= 1) {
      number -= 400;
      result += "CD";
    } else if (number / 100 >= 1) {
      number -= 100;
      result += "C";
    } else if (number / 90 >= 1) {
      number -= 90;
      result += "XC";
    } else if (number / 50 >= 1) {
      number -= 50;
      result += "L";
    } else if (number / 40 >= 1) {
      number -= 40;
      result += "XL";
    } else if (number / 10 >= 1) {
      number -= 10;
      result += "X";
    } else {
      result += romainArray[number];
      number = -1;
    }
  }
  return result;
}
