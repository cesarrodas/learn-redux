/*
// Pure function
function add (a, b) {
	return a + b;
}

// not pure function
var a = 3;
function add (b) {
	return a + b;
}

var result;
function add (a, b) {
	result = a + b;
	return result;
}

function add (a, b) {
	return a + b + new Date().getSeconds();
}

// pure functions are not allowed to change values
// passed in
function changeProp(obj) {
	return {
		...obj,
		name: 'Jen'
	}
	//obj.name = "jen";
	//return obj;
}

var startingValue = changeProp({
	name: 'Andrew',
	age: 25
});

var res = changeProp(startingValue);
console.log(startingValue);
console.log(res);
*/