/* DESCRIPTION
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/

/* TESTS
Test.assertEquals(longestPalindrome("a"), 1)
Test.assertEquals(longestPalindrome("aa"), 2)
Test.assertEquals(longestPalindrome("baa"), 2)
Test.assertEquals(longestPalindrome("aab"), 2)
Test.assertNotEquals(longestPalindrome("zyabyz"), 6, "Are you sure that is a palindrome?")
Test.assertEquals(longestPalindrome("baabcd"), 4)
Test.assertEquals(longestPalindrome("baablkj12345432133d"), 9)
*/

longestPalindrome = function(s) {
  let result = 0;
  let resultArray = [0];
  for (let i = 0; i < s.length && s.length >= 1; i++) {
    if (s.length == 1) {
      return 1;
    }

    if (s.length == 2 && s[i] === s[i + 1]) {
      return 2;
    } else if (s.length == 2) {
      return 1;
    }

    if (s[i] === s[i + 1]) {
      result = 2;
      for (let k = 1, p = 2; s[i - k] === s[i + p]; k++, p++) {
        result += 2;
      }
      resultArray.push(result);
    }
    result = 1;
    for (let k = 1; s[i - k] === s[i + k]; k++) {
      result += 2;
    }

    resultArray.push(result);
  }
  return resultArray.sort().pop();
};
