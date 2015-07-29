/* You could also export multiple functions (or classes) from one file. */

export function UpperFilter() {
	return function(input) {
		return input.toUpperCase();
	};
}

export function LowerFilter() {
	return function(input) {
		return input.toLowerCase();
	};
}