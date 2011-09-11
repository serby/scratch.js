function once(fn) {
	var r;
	return function() {
		if (r === undefined) {
			r = fn.apply(fn, arguments);
		}
		return r;
	};
}

function add(a, b) {
	this.a = 1;
	console.log(this);
	return a + b;
}

var onceAdd = once(add);

console.log(onceAdd(2, 3)); // returns 5
console.log(onceAdd(1, 2)); // returns 5
console.log(onceAdd(10, 20)); // return 5