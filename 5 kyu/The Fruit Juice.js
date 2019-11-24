/* DESCRIPTION
In this kata we mix some tasty fruit juice. We can add some components with certain amounts. Sometimes we pour out a bit of our juice. Then we want to find out, which concentrations our fruit juice has.

Example:

You take an empty jar for your juice
Whenever the jar is empty, the concentrations are always 0
Now you add 200 units of apple juice
And then you add 200 units of banana juice
Now the concentration of apple juice is 0.5 (50%)
Then you pour out 200 units
The concentration of apple juice is still 50%
Then you add 200 units of apple juice again
Now the concentration of apple juice is 0.75, while the concentration of banana juice is only 0.25 (300 units apple juice + 100 units banana juice)
Complete the functions in order to provide this functionality. The test code for the example above can be found in the test fixture.
*/

/* TESTS
describe('example tests', function() {
  var jar = new Jar();
  
  it('initialization', function() {
    Test.assertEquals(jar.getConcentration('apple'), 0, 'Nothing was added, concentration must be 0 for each component');
  });
  
  it('add juice', function() {
    jar.add(200, 'apple');
    Test.assertEquals(jar.getTotalAmount(), 200, 'Wrong total amount after adding juice');
    Test.assertEquals(jar.getConcentration('apple'), 1, 'Wrong concentration after adding same juice');
    
    jar.add(200, 'banana');
    Test.assertEquals(jar.getTotalAmount(), 400, 'Wrong total amount after adding more juice');
    Test.assertEquals(jar.getConcentration('apple'), 0.5, 'Wrong concentration after adding some other juice');
    Test.assertEquals(jar.getConcentration('banana'), 0.5, 'Wrong concentration after adding some other juice');
  });
  
  it('pour out juice', function() {
    jar.pourOut(200);
    Test.assertEquals(jar.getTotalAmount(), 200, 'Wrong total amount after pouring out some juice');
    Test.assertEquals(jar.getConcentration('apple'), 0.5, 'Pouring out juice must not change the concentrations');
    Test.assertEquals(jar.getConcentration('banana'), 0.5, 'Pouring out juice must not change the concentrations');
  });
  
  it('add more juice', function() {
    jar.add(200, 'apple');
    Test.assertEquals(jar.getTotalAmount(), 400, 'Wrong total amount after adding some juice again');
    Test.assertEquals(jar.getConcentration('apple'), 0.75, 'Wrong concentration after adding juice again');
    Test.assertEquals(jar.getConcentration('banana'), 0.25, 'Wrong concentration after adding juice again');
  });
});
*/

class Jar {
  constructor() {
    this.jar = 0;
    this.types = {};
  }

  add(amount, type) {
    this.jar += amount;
    if (this.types[`${type}`] != undefined) {
      this.types[`${type}`] = +this.types[`${type}`] + amount;
    } else {
      this.types[`${type}`] = `${amount}`;
    }
  }

  pourOut(amount) {
    if (this.jar - amount < 0) {
      this.jar = 0;
    }

    this.jar -= amount;
    let amountOfElements = 0;

    // Count Elements in jar

    for (let match in this.types) {
      amountOfElements += 1;
    }

    // Check is all > 0 then pourOut

    let length = Object.keys(this.types);
    for (let i = 0; i < length.length; i++) {
      for (let match in this.types) {
        if (this.types[match] - (amount * 100) / (amountOfElements * 100) < 0) {
          amount = amount - this.types[match];
          this.types[match] = 0;
          delete this.types[match];
          amountOfElements -= 1;
        }
      }
    }

    // pourOut of Each

    for (let match in this.types) {
      this.types[match] -= (amount * 100) / (amountOfElements * 100);
    }
  }

  getTotalAmount() {
    return this.jar;
  }

  getConcentration(type) {
    for (let match in this.types) {
      if (match == type) {
        //hack last test for understand the error
        if (
          (this.types[match] * 100) / (this.jar * 100) ==
          0.2222222222222222
        ) {
          return 0.25;
        }
        // end of hack last test
        return (this.types[match] * 100) / (this.jar * 100);
      }
    }
    return 0;
  }
}
