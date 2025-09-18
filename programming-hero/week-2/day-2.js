/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
	if (typeof s !== 'string') {
		console.log('s.split is not a function');
		console.log(s);
		return;
	}

	let = reversed = '';
	for (let i = s.length - 1; i >= 0; i--) {
		reversed += s[i];
	}

	console.log(reversed);
}

reverseString('hello');
