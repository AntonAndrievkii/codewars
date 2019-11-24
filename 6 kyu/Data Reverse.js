/* DESCRIPTION
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.
*/

/* TESTS
describe("Data Reverse", function(){
  it("Example Tests", function(){
    const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
    const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
    Test.assertDeepEquals(dataReverse(data1),data2)
    const data3 = [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]
    const data4 = [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]
    Test.assertDeepEquals(dataReverse(data3),data4)
  });
});
*/

function dataReverse(data) {
  const reducer = (accumulator, currentValue) =>
    accumulator.concat(currentValue);
  let data2 = [];
  for (
    let i = 0, sliceStart = 0, sliceEnd = 8;
    i < data.length / 8;
    i++, sliceStart += 8, sliceEnd += 8
  ) {
    data2[i] = data.slice(sliceStart, sliceEnd);
  }
  return data2.reverse().reduce(reducer);
}
