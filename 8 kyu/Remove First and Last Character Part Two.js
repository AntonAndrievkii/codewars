/* DESCRIPTION
This is a spin off of my first kata. You are given a list of character sequences as a comma separated string. 
Write a function which returns another string containing all the character sequences except the first and the last ones.
If the input string is empty, or the removal of the first and last items would cause the string to be empty, return a null value.
*/

/* TESTS
Test.describe("Tests", function(){

Test.assertEquals(array(''), null);
Test.assertEquals(array('1'), null);
Test.assertEquals(array('1, 3'), null);
Test.assertEquals(array('1,2,3'), '2');
  
});
*/

function array(arr) {
  let resultArray = arr.split(/\s*,\s*/);
  if (resultArray.length <= 2) {
    return null;
  } else {
    return resultArray.slice(1, resultArray.length - 1).join(" ");
  }
}
