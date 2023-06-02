'use strict';
console.log('working ...');

/*

task :  Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

point : [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

/ Expected Output :
/ 60°C is 140 °F
/ 45°F is 7.222222222222222°C

*/

// point : solution

function convertToFahrenheit(celsius) {
	let fahrenheit = (celsius * 9) / 5 + 32;
	let message = `${celsius}°C is ${fahrenheit}°F`;
	console.log(message);
}        

function convertToCelsius(fahrenheit) {
	let celsius = ((fahrenheit - 32) * 5) / 9;
	let message = `${fahrenheit}°F is ${celsius}°C`;
	console.log(message);
}

convertToCelsius(60);
convertToFahrenheit(45);
