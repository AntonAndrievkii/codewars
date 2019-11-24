/* DESCRIPTION
Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began. The letters have discovered a new unit - a priest with Wo lo looooooo power.


Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:
 w - 4
 p - 3 
 b - 2
 s - 1
 t - 0 (but it's priest with Wo lo loooooooo power)

 The right side letters and their power:
 m - 4
 q - 3 
 d - 2
 z - 1
 j - 0 (but it's priest with Wo lo loooooooo power)

 The other letters don't have power and are only victims.
 The priest units t and j change the adjacent letters from hostile letters to friendly letters with the same power.
mtq => wtp
wjs => mjz

A letter with adjacent letters j and t is not converted i.e.:
tmj => tmj
jzt => jzt

The priests (j and t) do not convert the other priests ( jt => jt).

Example
alphabetWar("z")         //=>  "z"  => "Right side wins!"
alphabetWar("tz")        //=>  "ts" => "Left side wins!" 
alphabetWar("jz")        //=>  "jz" => "Right side wins!" 
alphabetWar("zt")        //=>  "st" => "Left side wins!" 
alphabetWar("azt")       //=> "ast" => "Left side wins!"
alphabetWar("tzj")       //=> "tzj" => "Right side wins!" 
*/

/* TESTS
Test.assertEquals( alphabetWar("z") , "Right side wins!" );
Test.assertEquals( alphabetWar("tz") , "Left side wins!" );
Test.assertEquals( alphabetWar("jz") , "Right side wins!" );
Test.assertEquals( alphabetWar("zt") , "Left side wins!" );
Test.assertEquals( alphabetWar("sj") , "Right side wins!" ); 
Test.assertEquals( alphabetWar("azt") , "Left side wins!" );
Test.assertEquals( alphabetWar("tzj") , "Right side wins!" );
Test.assertEquals( alphabetWar("jbdt") , "Let's fight again!" );
Test.assertEquals( alphabetWar("wololooooo") , "Left side wins!" );
Test.assertEquals( alphabetWar("zdqmwpbs") , "Let's fight again!" );
Test.assertEquals( alphabetWar("ztztztzs") , "Left side wins!" );
*/

function alphabetWar(fight) {
  // make array
  fight = fight.split("");

  //define objects with letters which fights
  let leftSideLetters = {
    w: [4, "m"],
    p: [3, "q"],
    b: [2, "d"],
    s: [1, "z"]
  };
  let rightSideLetters = {
    m: [4, "w"],
    q: [3, "p"],
    d: [2, "b"],
    z: [1, "s"]
  };
  // define sums of right and left sides
  let sumOfLeft = 0;
  let sumOfRight = 0;

  // Searching j and t priests and do magic things :) (replace i+1 and i - 1)
  for (let i = 0; i < fight.length; i++) {
    // "Magic" for leftSide
    if (fight[i] == "t") {
      if (rightSideLetters[fight[i - 1]] != undefined && fight[i - 2] != "j") {
        fight[i - 1] = rightSideLetters[fight[i - 1]][1];
      }
      if (rightSideLetters[fight[i + 1]] != undefined && fight[i + 2] != "j") {
        fight[i + 1] = rightSideLetters[fight[i + 1]][1];
      }
    }
    // "Magic" for rightSide
    if (fight[i] == "j") {
      if (leftSideLetters[fight[i - 1]] != undefined && fight[i - 2] != "t") {
        fight[i - 1] = leftSideLetters[fight[i - 1]][1];
      }
      if (leftSideLetters[fight[i + 1]] != undefined && fight[i + 2] != "t") {
        fight[i + 1] = leftSideLetters[fight[i + 1]][1];
      }
    }
  }

  // Calculate who wins
  for (let i = 0; i < fight.length; i++) {
    if (rightSideLetters[fight[i]] != undefined) {
      sumOfRight += rightSideLetters[fight[i]][0];
    }
    if (leftSideLetters[fight[i]] != undefined) {
      sumOfLeft += leftSideLetters[fight[i]][0];
    }
  }

  // decide who win this epic battle
  if (sumOfLeft > sumOfRight) {
    return "Left side wins!";
  } else if (sumOfRight > sumOfLeft) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}
