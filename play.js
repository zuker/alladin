const {roll, check, alter} = require('./alladin.js');

let one, two, val;

////////////////////////////////ONE
one = check(0);
two = check(2);
if (one == two) {
    alter(0);
    alter(2);
} else {
    alter(0);
}
val = check(0);
roll();

////////////////////////////////TWO
one = check(0);
two = check(1);
if (one == two) {
    alter(0);
    alter(1);
} else {
    one == val? alter(1): alter(0)
}
val = check(0);
roll();

////////////////////////////////THREE
one = check(0);
two = check(2);
if (one !== two) {
    one == val? alter(2): alter(0);
} else {
    alter(2);
}
val = check(0);
roll();

////////////////////////////////FOUR
one = check(0);
two = check(1);
alter(0);
alter(1);
val = check(0);
roll();

////////////////////////////////FIVE
one = check(0);
two = check(2);
alter(0);
alter(2);
val = check(0);
roll();