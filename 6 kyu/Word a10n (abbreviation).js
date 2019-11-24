/* DESCRIPTION
The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
Example
abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!"
*/

/* TESTS
Test.assertEquals(abbreviate("internationalization"), "i18n");
Test.assertEquals(abbreviate("accessibility"), "a11y");
Test.assertEquals(abbreviate("Accessibility"), "A11y");
Test.assertEquals(abbreviate("elephant-ride"), "e6t-r2e");
*/

function abbreviate(string) {
  // I must find words in text and replace middle of it
  let changeAbbr = match => {
    if (match.length > 3) {
      return match[0] + (match.length - 2) + match[match.length - 1];
    } else {
      return match;
    }
  };

  let abbrRegExp = /[A-za-z]+/g;
  string = string.replace(abbrRegExp, changeAbbr);
  return string;
}
