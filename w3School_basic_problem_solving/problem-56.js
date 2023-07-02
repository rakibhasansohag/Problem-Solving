'use strict ';
console.log('working...');

// task : Find the smallest round number that is not less than a given value.

// point : solution 1 (  while loop )
console.time('nearestRoundNumber1');
function nearestRoundNumber(value) {
	while (value % 10 !== 0) {
		value++;
	}
	return value;
}

console.log(nearestRoundNumber(22)); /// 30
console.log(nearestRoundNumber(56)); /// 60
console.log(nearestRoundNumber(592)); /// 600

console.timeEnd('nearestRoundNumber1');

// point : solution 2 (  for loop )

console.time('nearestRoundNumber2');

function nearestRoundNumber1(value) {
	for (let i = value; i < value + 10; i++) {
		if (i % 10 === 0) {
			return i;
		}
	}
}

console.log(nearestRoundNumber1(22)); /// 30
console.log(nearestRoundNumber1(56)); /// 60
console.log(nearestRoundNumber1(592)); /// 600

console.timeEnd('nearestRoundNumber2');
