"use strict";
console.log("working...");

// Task : Get the lowest index at which value should be inserted into array in order to maintain its sort order.

// Point : solution 1 - using sort
const sortedIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];

  const index = arr.findIndex((el) => (isDescending ? n >= el : n <= el));

  return index === -1 ? arr.length : index;
};

console.log(sortedIndex([5, 3, 2, 1], 4)); // 1
console.log(sortedIndex([30, 50], 40)); // 1

// Point: solution 2 - without using built-in functions ( binary search )
function sortedIndex2(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      result = mid;
      right = mid - 1;
    }
  }

  return result + 1;
}

console.log(sortedIndex2([5, 3, 2, 1], 4)); // 0
console.log(sortedIndex2([30, 50], 40)); // 2
