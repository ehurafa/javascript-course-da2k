const sum = (a, b) => a + b;

console.log(sum(3,3));

let _new = null;

callNew = () => {
	return _new = '"NOVA"';
}

console.log('O valor da variável _new agora é ' + callNew());

let secondFunction = (a, b, c) => {
	if(!a || !b || !c) {
		return 'Preencha todoso os valore corretamente!';
	} else {
		return (a * b * c) + 2;
	}
	
} 

console.log(secondFunction(6));

console.log(secondFunction(12,98));

console.log(secondFunction(9, 8, 6));

let thirdFunction = (a, b, c) => {
	
	if (a && !b && !c) {
		return a;
	} else if (a && b && !c) {
		return a + b;
	} else if (a && b && c) {
		return (a + b) / c;
	} else if (!a && !b && !c) {
		return false;
	}  else {
		return null;
	}
	
}

console.log('-----------------');
console.log(thirdFunction(5)); 
console.log(thirdFunction(5,6));
console.log(thirdFunction(99,5,7));
console.log(thirdFunction());