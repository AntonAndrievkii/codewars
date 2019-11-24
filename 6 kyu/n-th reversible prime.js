/* DESCRIPTION
When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

Description:
What's a reversible prime? That is: A prime, reverse all the digits, get a new number. If the new number is also a prime, then it is a reversible prime .

We can get a sequence of reversible prime:

 n(start from 0)  --> 0 1 2 3 4  5  6  7  8  .....
 reversible prime --> 2 3 5 7 11 13 17 31 37 .....
Task
Complete function reversiblePrime. Function accept argument n(a integer, 0 <= n <= 10000). Returns the n-th reversible prime.

Some examples:
reversiblePrime(0) === 2

reversiblePrime(1) === 3 

reversiblePrime(5) === 13 

reversiblePrime(10) === 73 

reversiblePrime(20) === 167 

reversiblePrime(100) === 1669 
*/

/* TESTS
describe("Basic Tests", function(){
it("It should works for basic tests", function(){

Test.assertEquals(reversiblePrime(0) , 2) 

Test.assertEquals(reversiblePrime(1) , 3) 

Test.assertEquals(reversiblePrime(5) , 13) 

Test.assertEquals(reversiblePrime(10) , 73) 

Test.assertEquals(reversiblePrime(20) , 167) 

Test.assertEquals(reversiblePrime(100) , 1669) 

})})
*/

var rp = [];

function reversiblePrime(n) {
  var c = 1;
  while (rp.length <= 10001) {
    c += 1;
    if (primes(c) && primes(+[...(c + "")].reverse().join(""))) rp.push(c);
  }
  return rp[n];
}

function primes(n) {
  if (n < 2) return false;
  var i = 2;
  while (i * i <= n) {
    if (n % i == 0) return false;
    i++;
  }
  return true;
}
