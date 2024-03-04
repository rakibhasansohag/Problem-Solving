'use strict';
console.log('working...');

// task : Write a JavaScript program to create a specified currency format from a given number.

// Point: using Int.numberFormat
const toCurrencies = (n, cur, languageFormat = undefined) => {
	return Intl.NumberFormat(languageFormat, {
		style: 'currency',
		currency: cur,
	}).format(n);
};

console.log(toCurrencies(123456.789, 'EUR')); // currency: Euro | currencyLangFormat: Local
console.log(toCurrencies(123456.789, 'USD', 'en-us')); // currency: US Dollar | currencyLangFormat: English (United States)
console.log(toCurrencies(123456.789, 'USD', 'fa')); //currency: US Dollar | currencyLangFormat: Farsi
console.log(toCurrencies(322342436423.2435, 'JPY')); //currency: Japanese Yen | currencyLangFormat: Local
console.log(toCurrencies(322342436423.2435, 'JPY', 'fi')); //currency: Japanese Yen | currencyLangFormat: Finnish
console.log(toCurrencies(1233, 'BDT'));

// Point : using regex pattern
console.log('--------------------------------');
const toCurrencies1 = (n, cur) => {
	const [integerPart, decimalPart] = n.toString().split('.');

	const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

	const formattedCurrency = `${formattedInteger}.${decimalPart || '00'} ${cur}`;
	return formattedCurrency;
};
console.log(toCurrencies1(123456.789, 'EUR')); // currency: Euro | currencyLangFormat: Local
console.log(toCurrencies1(123456.789, 'USD', 'en-us')); // currency: US Dollar | currencyLangFormat: English (United States)
console.log(toCurrencies1(123456.789, 'USD', 'fa')); //currency: US Dollar | currencyLangFormat: Farsi
console.log(toCurrencies1(322342436423.2435, 'JPY')); //currency: Japanese Yen | currencyLangFormat: Local
console.log(toCurrencies1(322342436423.2435, 'JPY', 'fi')); //currency: Japanese Yen | currencyLangFormat: Finnish
console.log(toCurrencies1(1233, 'BDT', 'BDT'));
