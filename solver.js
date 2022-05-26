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

  
}

background();
populateVars();
