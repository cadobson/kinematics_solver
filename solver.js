const readline = require("readline");

/**
 * Outputs background information about kinematics suitable for laypeople
 */
let background = () => {
  console.log("Kinematics is often the first subject taught in a high school physics class.");
  console.log("In kinematics, we explore how velocity and position change under a constant acceleration.");
  console.log("We will consider five kinematic variables:");
  console.log("Initial velocity vi, final velocity vf, change in position x,")
  console.log("duration time t, and acceleration a.")
  console.log("The rule is: if we know three of these five, we can solve for the other two.")
  console.log("This solver will take three known variables and solve for the remaining two for you.")
  console.log("")
  console.log("If a variable is unknown, enter \"z\" to indicate an unknown.")
}

let populateVars = () => {
  let vars = {
    vi: "z",
    vf: "z",
    x: "z",
    t: "z",
    a: "z"
  }
  let knownVars = 0;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question("Enter initial velocity: ", (vi) => {
    vars.vi = vi;
    if (vi !== "z") {
      knownVars++;
    }
    rl.question("Enter final velocity: ", (vf) => {
      vars.vf = vf;
      if (vf !== "z") {
        knownVars++;
      }
      rl.question("Enter displacement: ", (x) => {
        vars.x = x;
        if (x !== "z") {
          knownVars++;
        }
        if (knownVars === 3) {
          rl.close();
          solve(vars);
        }
        else {
          rl.question("Enter time of duration: ", (t) => {
            vars.t = t;
            if (t !== "x") {
              knownVars++;
            }
            if (knownVars === 3) {
              rl.close();
              solve(vars)
            }
            else {
              rl.question("Enter acceleration: ", (a) => {
                vars.a = a;
                if (a !== "x") {
                  knownVars++;
                }
                if (knownVars === 3) {
                  rl.close();
                  solve(vars)
                }
                else {
                  console.log("We do not know at least three out of five variables. Solver will exit.")
                  rl.close();
                }

              });
            }

          });
        }
      });
    });

  });



  //rl.close();
}

let solve = (kVars) => {
  //console.log(kVars)
  //since there are 5 variables and three choices, there are 10 possible combinations
  //of known variables to account for. That's (5 choose 3) by the way. Thus, there
  //are 10 routes the code below might take. Don't get lost in the if tree.

  if (kVars.vi !== "z" && kVars.vf !== "z" && kVars.x !== "z") {
    console.log("Case 1")
  }
  else if (kVars.vi !== "z" && kVars.vf !== "z" && kVars.t !== "z") {
    console.log("Case 2")
  }
  else if (kVars.vi !== "z" && kVars.vf !== "z" && kVars.a !== "z") {
    console.log("Case 3")
  }
  else if (kVars.vi !== "z" && kVars.x !== "z" && kVars.t !== "z") {
    console.log("Case 4")
  }
  else if (kVars.vi !== "z" && kVars.x !== "z" && kVars.a !== "z") {
    console.log("Case 5")
  }
  else if (kVars.vi !== "z" && kVars.t !== "z" && kVars.a !== "z") {
    console.log("Case 6")
  }
  else if (kVars.vf !== "z" && kVars.x !== "z" && kVars.t !== "z") {
    console.log("Case 7")
  }
  else if (kVars.vf !== "z" && kVars.x !== "z" && kVars.a !== "z") {
    console.log("Case 8")
  }
  else if (kVars.vf !== "z" && kVars.t !== "z" && kVars.a !== "z") {
    console.log("Case 9")
  }
  else if (kVars.x !== "z" && kVars.t !== "z" && kVars.a !== "z") {
    console.log("Case 10")
  }
  else {
    console.log("Error 01, report bug to developer.")
  }
}

background();
populateVars();
