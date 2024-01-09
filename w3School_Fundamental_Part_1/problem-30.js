'use strict';
console.log('working...');

// task : Write a JavaScript program to add an event listener to an element with the ability to use event delegation.

// Point : solution 1 : solve using matches and addEventListener to the element with the ability to use event delegation.

const turnOn = (el, evt, fn, opts = {}) => {
	const defectorFn = (e) =>
		opts.target && e.target.matches(opts.target) && fn.call(e.target, e);

	el.addEventListener(
		evt,
		opts.target ? defectorFn : fn,
		opts.options || false,
	);

	if (opts.target) return defectorFn;
};

const fn = () => console.log('! delegator function');
console.log(turnOn(document.body, 'click', fn));
console.log(turnOn(document.body, 'click', fn, { target: 'p' }));
console.log(turnOn(document.body, 'click', fn, { target: true }));

// Point : simplified version of the problem above
const turnOn1 = (el, evt, fn, opts = {}) => {
	const defectorFn = (e) => {
		if (!opts.target || e.target.matches(opts.target)) {
			fn.call(e.target, e);
		}
	};
	el.addEventListener(evt, defectorFn, opts.options || false);

	return opts.target ? defectorFn : undefined;
};
console.log('--------------------------------------------------------');
const fn1 = () => console.log('! delegator function');
console.log(turnOn1(document.body, 'click', fn1));
console.log(turnOn1(document.body, 'click', fn1, { target: 'p' }));
console.log(turnOn1(document.body, 'click', fn1, { target: true }));
