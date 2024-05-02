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

console.log("------------------ another problem ------------------");
// Task : Sort the characters of a string Alphabetically.

// Point : solution 1 - using sort method
const sortCharactersInString = (str) =>
  [...str].sort((a, b) => a.localeCompare(b)).join("");

console.log(sortCharactersInString("cabbage")); // Output: 'aabbceg'
console.log(sortCharactersInString("a7fs23l1n4o6x")); // Output: '123467aflnosx'

// Point : solution 2 - without using any built-in functions;

const sortCharactersInString1 = (str) => {
  const arr = [...str];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr.join("");
};

console.log(sortCharactersInString1("cabbage")); // Output: 'aabbceg'
console.log(sortCharactersInString1("a7fs23l1n4o6x")); // Output: '123467aflnosx'

// Task : Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type

// Point : solution 1
const isSame = (a, b) => a === b;

// Task : Write a function that takes a value as argument. Return the type of the value.
// Point : solution 1
const typeOfValue = (value) => typeof value;

// Task : Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.
// Point: solution 1
const nthChar = (a, n) => a[n - 1];
// Point: solution 2
const nthChar1 = (a, n) => a.slice(n - 1, n);

// Task : Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result.
const removeFirstThree = (a) => a.slice(3);

// Task : Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result.
// Point: solution 1
const extractLastThree = (a) => a.slice(-3);

const getFirstCharacters = (string) => string.slice(0, 3);

// Task : Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'.
// Point : solution 1
const indexIs = (a) => a.indexOf("is");

// Task : Write a function that takes a string (a) as argument. Extract the first half a. Return the result.
// Point: solution 1 :
const extractHalf = (a) => a.slice(0, a.length / 2);

// Task : Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result.
// Point: solution 1
const removeLastThree = (a) => a.slice(0, -3);

// Task : Write a function that takes two numbers (a and b) as argument. Return b percent of a.
// Point: solution 1 :
const percent = (a, b) => (a * b) / 100;

// Task : Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Hint: mind the order.
// Point: solution 1 :
const sumAndExtract = (a, b, c, d, e, f) => {
  const sumAB = a + b;
  const subtractC = sumAB - c;
  const multiplyD = subtractC * d;
  const divideE = multiplyD / e;
  const powerF = divideE ** f;
  return powerF;
};
// Point: solution 2:
const sumAndExtract2 = (a, b, c, d, e, f) => (((a + b - c) * d) / e) ** f;
console.log(sumAndExtract(2, 3, 6, 4, 2, 3));
console.log(sumAndExtract2(2, 3, 6, 4, 2, 3));
// Task : Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation.
// Point: solution 1 :
const appendOrPrepend = (a, b) => (a.indexOf(b) > -1 ? b + a : a + b);
const appendOrPrepend2 = (a, b) => (a.indexOf(b) === -1 ? a + b : b + a);

console.log(appendOrPrepend("cheese", "cake"));
console.log(appendOrPrepend2("rakib hasan ", "sohag"));

// Task : Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false.
const solution = (a) => (a % 2 === 0 ? true : false);
const solution1 = (a) => {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(solution(2));
console.log(solution(3));
console.log(solution1(2));
console.log(solution1(3));

// Task : Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b..
// Point : solution 1 -
const countChar = (a, b) => b.split(a).length - 1;
console.log(countChar("a", "a"));

// Task : Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false..

// Point : solution 1 :
const isInteger = (a) => (Number.isInteger(a) ? true : false);
const isInteger2 = (a) => a - Math.floor(a) === 0;

// Task :  Get an array of elements that appear in both arrays.
// Point : solution 1  ;
const similarity = (arr, values) => {
  return arr.filter((x) => values.includes(x));
};

console.log(similarity([1, 2, 3], [1, 2, 4])); // Output: [1, 2]

// Point: solution 2 - without using any built-in functions
const similarity2 = (arr, values) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < values.length; j++) {
      if (arr[i] === values[j]) {
        result.push(arr[i]);
        break;
      }
    }
  }
  return result;
};

console.log(similarity2([1, 2, 3], [1, 2, 4])); // Output: [1, 2]

// Task : Randomize the order of the values of an array, returning a new array.
// Point : solution 1 - using Math.random() and Math.floor()

const randomize = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

console.log(randomize([1, 2, 3]));

// Point : solution 2 - without using any built-in functions
const randomize2 = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

console.log(randomize2([1, 2, 3]));

//Task :  Create a shallow clone of an object.
// Point : solution 1 - using Object.assign() and an empty object ({}) to create a shallow clone of the original.
const shallowClone = (obj) => Object.assign({}, obj);

const x = { x: true, y: false };

const xx = { x: true, y: false, z: 10, a: [1, 2, 3] };
let y = shallowClone(x);

const yy = shallowClone(xx);
const z = { z: true };
const zz = z;
console.log(zz);

console.log(y);
console.log(x);

console.log(x === y);
console.log(yy);

// Point : solution 2 - without using any built-in functions
const shallowClone1 = (obj) => {
  const result = [];

  for (let key in obj) {
    result[key] = obj[key];
  }

  return result;
};

const clone = shallowClone1(x);
console.log(clone);

// Task : Write a JavaScript program to hash the input string into a whole number.
// Point : solution 1 - using Math.pow() and Math.round()
const hash = (str) => {
  let arr = str.split("");

  return arr.reduce(
    (hashCode, currentValue) =>
      (hashCode =
        currentValue.charCodeAt(0) +
        (hashCode << 6) +
        (hashCode << 16) -
        hashCode),
    0
  );
};
console.log(hash("name"));

// Point : solution 2 - without using  any built-in functions
const hash1 = (str) => {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    hash = hash * 16 + charCode;

    // Convert to 32bit integer
    hash = Math.round(hash);
  }

  return hash;
};

console.log(hash1("name"));

const calculateStringHash = (inputString) => {
  const characters = inputString.split("");

  return characters.reduce((hashCode, character) => {
    const characterCode = character.charCodeAt(0);
    return (hashCode << 6) + characterCode - hashCode;
  }, 0);
};

// Task : Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value.

// Point : solution 1 -   using ternary operator
const calculate = (a, b) => (a < b ? a / b : a * b);
console.log(calculate(10, 5));

// Point : solution 2 - using if else
const calculate2 = (a, b) => {
  if (a < b) {
    return a / b;
  } else {
    return a * b;
  }
};

console.log(calculate2(10, 5));

// Task : Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number.
// Point: solution 1 - using Math.round()
const round = (a) => Math.round(a * 100) / 100;
console.log(round(3.1415));

// Point: solution 2 - using toFixed()
const round1 = (a) => a.toFixed(2);
console.log(round1(3.1415));

// Point : solution 3 - using Number
const round2 = (a) => Number(a.toFixed(2));
console.log(round2(3.1415));

// Task: Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Hint: you might want to change the type of the number for the splitting.
// Point: solution 1 -- using String
const split = (a) => Array.from(String(a), Number);
console.log(split(10));
console.log(split(12345));

// Point : solution 2 - using spread operator
const split1 = (a) => [...String(a)];
console.log(split1(10));
console.log(split1(12345));

// Point: solution 3 - using Number
const split2 = (a) => a.toString().split("").map(Number);
console.log(split2(10));
console.log(split2(12345));

// Point: solution 4 - using while loop
const split3 = (a) => {
  let arr = [];
  while (a > 0) {
    arr.push(a % 10);

    a = Math.floor(a / 10);
  }

  return arr.reverse(); // to reverse the output as desire one
};
console.log(split3(10));
console.log(split3(12345));

// Point: solution 5 - simple way;
const split4 = (a) => {
  const string = a + "";
  const arr = string.split("");
  return arr.map((el) => +el);
};
console.log(split4(10));
console.log(split4(12345));
