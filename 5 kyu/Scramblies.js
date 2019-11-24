/* DESCRIPTION
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

/* TESTS
describe('Example Tests', function(){
  Test.assertEquals(scramble('rkqodlw','world'),true);
  Test.assertEquals(scramble('cedewaraaossoqqyt','codewars'),true);
  Test.assertEquals(scramble('katas','steak'),false);
  Test.assertEquals(scramble('scriptjava','javascript'),true);
  Test.assertEquals(scramble('scriptingjava','javascript'),true);
  Test.assertEquals(scramble('scriptsjava','javascripts'),true);
  Test.assertEquals(scramble('jscripts','javascript'),false);
  Test.assertEquals(scramble('aabbcamaomsccdd','commas'),true);
});
*/

function scramble(str1, str2) {
  let arrayWithMatches = str1.split("").reduce((arrWM, currentLetter) => {
    arrWM[currentLetter] ? arrWM[currentLetter]++ : (arrWM[currentLetter] = 1);
    return arrWM;
  }, {});
  return str2
    .split("")
    .every(str2LetterMatch => --arrayWithMatches[str2LetterMatch] >= 0);
}
