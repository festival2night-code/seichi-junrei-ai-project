let truthyOrFalsy = true;
console.log(Boolean(truthyOrFalsy));

truthyOrFalsy = "John";
console.log(Boolean(truthyOrFalsy));

truthyOrFalsy = "";
console.log(Boolean(truthyOrFalsy));

let hasDeveloperJob = true;

if (hasDeveloperJob) {
    console.log("Timmy is employed as a developer.");
}

let isTimmyAGamer = false;

if (isTimmyAGamer) {
    console.log("Timmy loves to play World of Warcraft.");
}

let timmyAge = 18;

if (timmyAge >= 16) {
    console.log("Timmy is old enough to drive.");
} else {
    console.log("Timmy is not old enough to drive.");
}

timmyAge = 15;

if (timmyAge >= 16) {
    console.log("Timmy is old enough to drive.");
} else {
    console.log("Timmy is not old enough to drive.");
}