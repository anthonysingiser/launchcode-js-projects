let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//2) 
function reverseCommas(str) {
	//TODO: 1. create and instantiate your variables.
	let check = str.includes(',');
	if (check){	
		let output = str.split(',').reverse().join(',');
		return output;
	}
	//TODO: 2. write the code required for this step
	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return str;
}

//3)
function semiDash(str) {
	let check = str.includes(';');
	if (check){
		let output = str.split(';').sort().join('-');
		return output;
	}
	return str;
//TODO: write the code required for this step
}

//4)
function reverseSpaces(str) {
	let check = str.includes(' ');
	if (check){
		let output = str.split(' ').sort().reverse().join(' ');
		return output;
	}
	//TODO: write the code required for this step
	return str;
}

//5)

// str = "Comma-spaces, might, require, typing, caution"
//output = "caution,typing,require,might,Comma-spaces"

function commaSpace(str) {
	let check = str.includes(', ');
	if (check){
		let output = str.split(', ').reverse().join(',');
		console.log(output)
		return output;
	}
	return str;
}

commaSpace(protoArray4);

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
