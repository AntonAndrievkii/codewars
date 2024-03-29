/* DESCRIPTION
A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Example:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).
*/

/* TESTS
describe("Tests", function(){
    it ("test1", function(){
         Test.assertEquals(bouncingBall(3.0, 0.66, 1.5), 3);
    });
    
    it ("test2", function(){
         Test.assertEquals(bouncingBall(30.0, 0.66, 1.5), 15);
    });
    
});
*/

function bouncingBall(h, bounce, window) {
  let result = -1;
  for (let i = 1; h > window && 0 < bounce && bounce < 1; i++) {
    if (result == -1) {
      result = 0;
    }
    result += 1;
    h = h * bounce;
    if (h > window) {
      result += 1;
    }
  }
  return result;
}
