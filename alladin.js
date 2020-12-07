let barrel = [];
let altered = [];
let checked = [];
let rollCount = 0;

for (let i = 0; i < 4; i++) {
    barrel[i] = getSeledka();
}

console.log("initial barrel ", barrel);

function getSeledka() {
    return Math.floor(Math.random() * Math.floor(2));
}

function roll() {
    if (altered.length < 1) {
        throw new Error("At least one seledka needs to be changed");
    }
    let shiftCount = Math.floor(Math.random() * Math.floor(4));
    let temp = [];
    for (let i = 0; i < 4; i++) {
        temp[(i + shiftCount) > 3? (i + shiftCount) - 4: (i + shiftCount)] = barrel[i];
    }
    console.log("shifting on ", shiftCount);
    barrel = temp;
    console.log("new barrel ", barrel);
    checked = [];
    altered = [];
    rollCount++;
}

function check(pos) {
    checkPos(pos);
    if (!checked.includes(pos)) {
        checked.push(pos);
    }
    if (checked.length > 2) {
        throw new Error("Out of cheks this turn");
    }
    console.log("Checking position ", pos, " value found ", barrel[pos]);
    return barrel[pos];
}

function alter(pos) {
    checkPos(pos);
    if (!checked.includes(pos)) {
        throw new Error("You have not checked this position");
    }
    const index = altered.indexOf(pos);
    if (index > -1) {
        altered.splice(altered, 1);
    } else {
        altered.push(pos);
    }
    barrel[pos] = Math.abs(barrel[pos] - 1)

    console.log("Changing position ", pos, " New value ", barrel[pos]);
    console.log("Now barrel is ", barrel);
    let sum = barrel.reduce((a, b) => a + b, 0);
    if (sum == 0 || sum == 4) {
        throw new Error("You won, roll count is ", rollCount);
    }
}

function checkPos(pos) {
    if (pos < 0 || pos > 3) {
        throw new Error("no such position");
    } 
}

module.exports = {
    roll: roll,
    alter: alter,
    check: check
};
