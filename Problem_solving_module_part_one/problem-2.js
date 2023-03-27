// 2. একটি জাভাস্ক্রিপ্ট প্রোগ্রাম লিখ যা যেকোনো ধনাত্মক সংখ্যা ইনপুট দিলে ১প্রিন্ট করবে,এবং শূন্য ইনপুট দিলে ০ প্রিন্ট করবে, অন্যতায় -১ প্রিন্ট করে।

const myFunc = (number) => {
	if (number > 0) {
		return 1;
	} else if (number === 0) {
		return 0;
	} else {
		return -1;
	}
};

console.log(myFunc(10)); // 1
console.log(myFunc(-10)); // -1
console.log(myFunc(0)); //! 0
