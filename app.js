$(document).ready(function() {
	getNumber();
});

function getNumber() {
	var number = prompt('Enter a Number');
	number = parseInt(number);
	if (!number) {
		getNumber();
	}
	fizzBuzz(number);
}

function fizzBuzz(number) {
	for (var i = 1; i <= number; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			document.write('FizzBuzz');
			document.write("<br>");
		}
		else if (i % 3 === 0) {
			document.write('Fizz');
			document.write("<br>");
		}
		else if (i % 5 === 0) {
			document.write('Buzz');
			document.write("<br>");
		}
		else {
			document.write(i);
			document.write("<br>");
		}
	}
}