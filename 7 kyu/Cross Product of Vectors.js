/* DESCRIPTION
Make a function called crossProduct that takes two 3 dimensional vectors (in the form of two arrays) and returns their cross product. 
You need to check if the passed arguments are of the expected format, otherwise throw the message: "Arguments are not 3D vectors!".

crossProduct([1,0,0],[0,1,0]) //should return [0,0,1]
crossProduct('gobbledigook', [1,1,1]) //should throw the string "Arguments are not 3D vectors!"
Your function should handle non integers.

More info on cross products: https://en.wikipedia.org/wiki/Cross_product

crossprod([1,0,0], [0,1,0], 3, 3)         /* should return [0,0,1] 
crossprod([1,2,3,4,5], [5,4,3,2,1], 5, 5) /* should return NULL 
crossprod([6,6,6], NULL, 3, 3)            /* should return NULL 
crossprod(NULL, NULL, 3, 3)               /* should return NULL 
*/

/* TESTS
Test.assertSimilar(crossProduct([1,0,0], [0,1,0]), [0,0,1]);
Test.assertSimilar(crossProduct([3,2,1], [1,2,3]), [4,-8,4]);
Test.expectError("Expected error was not thrown", crossProduct);
*/

function crossProduct(vector1, vector2) {
  console.log(vector1, vector2);
  let result = [];
  if (
    vector1 === undefined ||
    vector2 === undefined ||
    Array.isArray(vector1) !== true ||
    Array.isArray(vector2) !== true
  ) {
    throw "Arguments are not 3D vectors!";
  } else {
    if (vector1.length !== 3 || vector2.length !== 3) {
      throw new Error("Arguments are not 3D vectors!");
    }
    result.push(
      vector1[1] * vector2[2] - vector1[2] * vector2[1],
      vector1[2] * vector2[0] - vector1[0] * vector2[2],
      vector1[0] * vector2[1] - vector1[1] * vector2[0]
    );
    return result;
  }
}
