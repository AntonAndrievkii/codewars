/* DESCRIPTION
You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

/* TESTS
const assert = require("chai").assert;

describe("Fixed Tests", function() {
  it("should work with fixed tests", function() {
    assert.strictEqual(encryptThis("A"), "65");
    assert.strictEqual(encryptThis("A wise old owl lived in an oak"), "65 119esi 111dl 111lw 108dvei 105n 97n 111ka");
    assert.strictEqual(encryptThis("The more he saw the less he spoke"), "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp");
    assert.strictEqual(encryptThis("The less he spoke the more he heard"), "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare");
    assert.strictEqual(encryptThis("Why can we not all be like that wise old bird"), "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri");
    assert.strictEqual(encryptThis("Thank you Piotr for all your help"), "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple");    
  });
});
*/

var encryptThis = function(text) {
  let regExpForEncrypt = /[A-za-z]+/g;
  let changeWords = match => {
    if (match.length > 2) {
      return (
        match.charCodeAt(0) +
        match[match.length - 1] +
        match.slice(2, -1) +
        match[1]
      );
    } else if (match.length == 2) {
      return match.charCodeAt(0) + match[1];
    } else {
      return match.charCodeAt(0);
    }
  };
  text = text.replace(regExpForEncrypt, changeWords);
  return text;
};
