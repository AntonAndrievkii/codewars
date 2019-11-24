/* DESCRIPTION
For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
Write two methods:

function encrypt(text, n)
function decrypt(encryptedText, n)
For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text.
*/

/* TESTS
describe("Solution", function(){
  it("EncryptExampleTests", function(){    
    Test.assertEquals(encrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");
    Test.assertEquals(encrypt("This is a test!", 2), "s eT ashi tist!");
    Test.assertEquals(encrypt("This is a test!", 3), " Tah itse sits!");
    Test.assertEquals(encrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");
  });
});

describe("Solution", function(){
  it("DecryptExampleTests", function(){    
    Test.assertEquals(decrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(decrypt("hsi  etTi sats!", 1), "This is a test!");
    Test.assertEquals(decrypt("s eT ashi tist!", 2), "This is a test!");
    Test.assertEquals(decrypt(" Tah itse sits!", 3), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");
  });
});

describe("Solution", function(){
  it("Null or Empty", function(){    
    Test.assertEquals(encrypt("", 0), "");
    Test.assertEquals(decrypt("", 0), "");
    Test.assertEquals(encrypt(null, 0), null);
    Test.assertEquals(decrypt(null, 0), null);
  });
});
*/

function encrypt(text, n) {
  if (text == null) {
    return text;
  }
  for (; n >= 1; n--) {
    let text1 = "";
    let text2 = "";
    for (let i = 0; i < text.length; i++) {
      if (i % 2 == 0) {
        text2 += text[i];
      } else {
        text1 += text[i];
      }
    }
    text = text1 + text2;
  }
  return text;
}

function decrypt(encryptedText, n) {
  for (; n >= 1; n--) {
    let lastT = "";
    if (encryptedText.length % 2 != 0) {
      lastT = encryptedText.slice(-1);
    }
    let forEncText = Math.floor(encryptedText.length / 2);
    let encrText1 = encryptedText.slice(0, forEncText); //
    let encrText2 = encryptedText.slice(forEncText, encryptedText.length);
    encryptedText = "";
    for (let i = 0; i < forEncText; i++) {
      encryptedText += encrText2[i] + encrText1[i];
    }
    encryptedText += lastT;
  }

  return encryptedText;
}
