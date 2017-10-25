'use strict';


// By link or by value?
// ------------------------

var alpha, beta = "gamma";
alpha = beta;
alpha += "_updated";
console.log("Alpha: " + alpha + ", Beta = " + beta);

// ------------------------


// var, let and const usage
// ------------------------

console.log("Before declaration \"foo\" = " + foo);
var foo = 0;

if (true) {
	var foo = 5;
}

console.log("Outside of the \"if\" clause \"foo\" eq. to " + foo);

// console.log(bar);

function test_function() {
	var bar = "1703";
}

for (var i = 1; i < 11; i++) {
	console.log("Iteration #" + i);
}

console.log("Outside of the loop \"i\" eq. to " + i);

// ------------------------


// Various functions arity
// ------------------------

var variableToChange = 500;
test_arguments(variableToChange, 600, 700);
console.log(variableToChange);

function test_arguments(InputParameter) {

	console.log("Parameter: " + InputParameter);
	console.dir(arguments);

	for (let i = 1; i < arguments.length; i++) {
		InputParameter = arguments[i];
		console.log("Iteration #" + i + ", InputParameter = " + InputParameter +
			", variableToChange = " + variableToChange);
	}

	variableToChange = InputParameter;

}

// ------------------------


// Types
// ------------------------

var firstNumber = 6, secondNumber = 14.997;
console.log(/*typeof (*/secondNumber / 0/*)*/); // Infinity
console.log(/*typeof (*/"A" * firstNumber/*)*/); // NaN

var emptyVariable = null;
console.log(/*typeof (*/emptyVariable/*)*/); // design error

// ------------------------


// Array disorientation
// ------------------------

let testArray = [1, 2, "OK", {"foo" : "bar"}];

// testArray.length += 100;
// testArray.push("New element");

console.dir(testArray);

// ------------------------


// Comparison chaos
// ------------------------
console.log('' == false);
console.log("\"null\" == 0? --> " + (null == 0) + ", \"null\" > 0? --> " + (null > 0) +
	", \"null\" >= 0? --> " + (null >= 0)); // works like "false" OR "false" = "true"

console.log("\"undefined\" equals \"null\"? --> " + (undefined == null) +
	", \"null\" >= 0 --> " + (null >= 0) + ", \"undefined\" >= 0? --> " + (undefined >= 0));
	// transitivity? no, never heard.

// ------------------------
