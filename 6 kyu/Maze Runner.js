/* DESCRIPTION
Introduction
 	Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
 
Maze Runner
Task
 	You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
 
The Maze array will look like

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]
..with the following key

 	0 = Safe place to walk
1 = Wall
2 = Start Point
3 = Finish Point
 
  direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
Rules
 	1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.
2. The start and finish positions will change for the final tests.
3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.
</td>
 
Good luck, and stay safe!
*/

/* TESTS
var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];
            
Test.assertEquals(mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"]), "Finish", "Expected Finish");
Test.assertEquals(mazeRunner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]), "Finish", "Expected Finish");
Test.assertEquals(mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E","W","W"]), "Finish", "Expected Finish");

Test.assertEquals(mazeRunner(maze,["N","N","N","W","W"]), "Dead", "Expected Dead");
Test.assertEquals(mazeRunner(maze,["N","N","N","N","N","E","E","S","S","S","S","S","S"]), "Dead", "Expected Dead");

Test.assertEquals(mazeRunner(maze,["N","E","E","E","E"]), "Lost", "Expected Lost");
*/

function mazeRunner(maze, directions) {
  let result = "";
  let resultFinish = "";

  let searchStart = () => {
    let startIndex = [];
    for (let i = 0; i < maze.length; i++) {
      if (maze[i].indexOf(2) !== -1) {
        startIndex.push(maze[i].indexOf(2), i, maze.length);
        return startIndex;
      }
    }
  };

  // ********************************************************* Initial starting data

  let startingIndex = searchStart();
  let x = startingIndex[0];
  let y = startingIndex[1];
  let maxSize = startingIndex[2];
  let currentPosition = [x, y];

  // ****************************************************** Set methods to move

  let north = current => {
    if (current[1] - 1 >= 0) {
      currentPosition = [current[0], current[1] - 1];
    } else {
      result = "Dead";
    }
    checkStatus(currentPosition);
  };

  let south = current => {
    if (current[1] + 1 < maxSize) {
      currentPosition = [current[0], current[1] + 1];
    } else {
      result = "Dead";
    }
    checkStatus(currentPosition);
  };

  let west = current => {
    if (current[0] - 1 >= 0) {
      currentPosition = [current[0] - 1, current[1]];
    } else {
      result = "Dead";
    }
    checkStatus(currentPosition);
  };

  let east = current => {
    if (current[0] + 1 < maxSize) {
      currentPosition = [current[0] + 1, current[1]];
    } else {
      result = "Dead";
    }
    checkStatus(currentPosition);
  };

  // ****************************************************** Check current position is DEAD

  let checkStatus = current => {
    if (maze[current[1]][current[0]] == 1) {
      result = "Dead";
    } else if (maze[current[1]][current[0]] == 3) {
      resultFinish = "Finish";
    }
  };

  // ******************************************************** Go on positions

  for (let i = 0; i < directions.length; i++) {
    if (directions[i] == "N") {
      north(currentPosition);
    } else if (directions[i] == "S") {
      south(currentPosition);
    } else if (directions[i] == "W") {
      west(currentPosition);
    } else if (directions[i] == "E") {
      east(currentPosition);
    } else {
      return console.log("Wrong position NSWE");
    }
  }
  if (result !== "") {
    return result;
  } else if (resultFinish !== "") {
    return resultFinish;
  } else {
    return "Lost";
  }
}
