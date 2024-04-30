"use strict ";
console.log("working...");
// Task :Takes a variadic function and returns a closure that accepts an array of arguments to map to the inputs of the function.

// Point : solution 1 - using spread operator and

const spreadOver = (fn) => (arr) => fn(...arr);

const array = [1, 2, 3, 4, 5];

const add = (a, b) => a + b;
const arrayMax = spreadOver(Math.max);
// The spread operator '...' is used to spread the elements of the array. In this case, it spreads the array [1, 2, 3, 4, 5].
// The add function takes two arguments, 'a' and 'b'. When the spreadOver function is called with the array, it passes each element of the array as an argument to the add function.
// In this case, the add function is called three times with the arguments 1, 2, 3, respectively. So, the result of the spreadOver function call is add(1, 2) + add(2, 3) + add(3, 4), which equals 3.
// Therefore, the final output is 3.

console.log(spreadOver(add)(array)); ///  3
console.log(arrayMax(array)); ///  5

// Task : Split a multiline string into an array of lines.

// Point : solution 1 - using split()
const splitLines = (str) => str.split(/\r?\n/);

console.log(splitLines("Line 1\nLine 2\nLine 3"));
console.log(splitLines("this is fine "));

// Point: solution 2 - without using any built-in functions
const splitLines1 = (str) => {
  const lines = [];
  let currentLine = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "\n" || char === "\r") {
      if (currentLine !== "") {
        lines.push(currentLine);
        currentLine = "";
      }
    } else {
      currentLine += char;
    }
  }
  if (currentLine !== "") lines.push(currentLine);

  return lines;
};

console.log(splitLines1("Line 1\nLine 2\nLine 3"));
console.log(splitLines1("this is fine "));

// Task : Get the highest index at which value should be inserted into array in order to maintain its sort order, based on a provided iterator function.
const sortedLastIndexBy = (arr, n, fn) => {
  let index = -1;

  const sortedArr = [...arr].sort((a, b) => fn(a) - fn(b));

  for (let i = 0; i < sortedArr.length; i++) {
    if (fn(sortedArr[i]) > fn(n)) {
      index = i;
      break;
    }
  }

  if (index === -1) index = sortedArr.length;

  return index;
};

// Test the function
console.log(sortedLastIndexBy([10, 20, 30, 40, 50], 35, (x) => x));
console.log(sortedLastIndexBy([2, 3, 20, 50, 5], 3, (x) => x));
console.log(sortedLastIndexBy([2, 3, 50, 5], 3, (x) => x));
console.log(sortedLastIndexBy([50, 5], 3, (x) => x));
console.log(sortedLastIndexBy([5], 3, (x) => x));
console.log(sortedLastIndexBy([], 3, (x) => x));
console.log(sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, (o) => o.x)); // Output: 1
// Point : solution 1 - using sort
const sortedLastIndexBy1 = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);

  const val = fn(n);

  const index = arr
    .map(fn)
    .reverse()
    .findIndex((el) => (isDescending ? val <= el : val >= el));

  return index === -1 ? 0 : arr.length - index;
};

console.log("---------------------------");
// Testing the function
console.log(sortedLastIndexBy1([10, 20, 30, 40, 50], 35, (x) => x));
console.log(sortedLastIndexBy1([2, 3, 20, 50, 5], 3, (x) => x));
console.log(sortedLastIndexBy1([2, 3, 50, 5], 3, (x) => x));
console.log(sortedLastIndexBy1([50, 5], 3, (x) => x));
console.log(sortedLastIndexBy1([5], 3, (x) => x));
console.log(sortedLastIndexBy1([], 3, (x) => x));
console.log(sortedLastIndexBy1([{ x: 4 }, { x: 5 }], { x: 4 }, (o) => o.x));

console.log("--------- another problem ---------------");
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(""));

// Task :  Get the highest index at which value should be inserted into array in order to maintain its sort order

// Point: solution 1 - using sort
const sortedLastIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];

  const index = arr
    .reverse()
    .findIndex((el) => (isDescending ? n <= el : n >= el));

  return index === -1 ? 0 : arr.length - index;
};

console.log(sortedLastIndex([10, 20, 30, 40, 50], 35)); ///3
console.log(sortedLastIndex([2, 3, 20, 50, 5], 3)); ///2
console.log(sortedLastIndex([2, 3, 50, 5], 3)); /// 2
console.log(sortedLastIndex([50, 5], 3)); /// 3
console.log(sortedLastIndex([5], 3)); /// 0
console.log(sortedLastIndex([], 3)); /// 0
console.log(sortedLastIndex([{ x: 4 }, { x: 5 }], { x: 4 })); /// 2
console.log(sortedLastIndex([10, 20, 30, 30, 40], 30)); /// Output: 4

console.log("solution 2 ");
// Point : solution 2 - without using any built-in  functions;

const sortedLastIndex1 = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else {
      result = mid;
      right = mid - 1;
    }
  }
  return result + 1;
};

console.log(sortedLastIndex1([10, 20, 30, 40, 50], 35)); ///3
console.log(sortedLastIndex1([2, 3, 20, 50, 5], 3)); ///2
console.log(sortedLastIndex1([2, 3, 50, 5], 3)); /// 2
console.log(sortedLastIndex1([50, 5], 3)); /// 3
console.log(sortedLastIndex1([5], 3)); /// 0
console.log(sortedLastIndex1([], 3)); /// 0
console.log(sortedLastIndex1([{ x: 4 }, { x: 5 }], { x: 4 })); /// 2
console.log(sortedLastIndex1([10, 20, 30, 30, 40], 30)); /// Output: 4

console.log("problem solve : ");

