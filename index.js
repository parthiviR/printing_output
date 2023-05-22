// Task 1
// Declare three variables, a and b and c.

let a = 3;
let b = 5;
let c;

// Using string interpolation to print variables operation in string and display in alert box.
alert(`
var a = 3;
var b = 5;
var c;
--------
a + b = ${a + b}
a - b = ${a - b}
a * b = ${a * b}
a / b = ${a / b}
a % b = ${a % b}
a += b : ${a += b}
a -= b : ${a -= b}
a *= b : ${a *= b}
a /= b : ${a /= b}
a %= b : ${a %= b}
a == b : ${a == b}
a != b : ${a != b}
a > b : ${a > b}
a < b : ${a < b}
!a && !c : ${!a && !c}
!a || !c : ${!a || !c}
`
);


// TASK 2
// Declaring variable type string
let first_name = "Parthivi";
let last_name = "Rastogi";
let email = "rast0015@algonquinlive.com";
let output;

output = "My name is " + first_name + " " + last_name + ". You can contact me at " + email + ".";
alert(output);