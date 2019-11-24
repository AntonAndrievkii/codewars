/* DESCRIPTION
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

/* TESTS
Test.assertEquals(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
Test.assertEquals(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
Test.assertEquals(order(""), "")
*/

function order(words) {
  let final_array = [];
  let array_words = words.split(" ");
  let array_words_length = array_words.length;
  for (let i = 0; i < array_words_length; i++) {
    let word_i = array_words[i];
    for (let j = 0; j < 9; j++) {
      if (word_i.indexOf(j + 1) !== -1) {
        final_array[j] = word_i;
      }
    }
  }
  let result = final_array.join(" ");
  return result;
}
