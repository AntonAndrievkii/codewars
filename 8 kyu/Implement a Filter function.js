/* DESCRIPTION
What we want to implement is a filter function, like Array.filter(), also similar to the _.filter() in underscore.js and lodash.js.

The usage is quite simple, like:

[1,2,3,4].filter((num)=>{ return num > 3})
should output [4]
*/

/* TESTS
Test.assertSimilar([1,2,3,4].filter((num)=>{ return num > 3}), [4])
*/

Array.prototype.filter = function(a) {
  let arrayResult = [];
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
    if (a(this[i])) {
      arrayResult.push(this[i]);
    }
  }
  return arrayResult;
};
