(function() {
	/*
	Envolva todo o conteúdo desse arquivo em uma IIFE.
	*/
	
	/*
	Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
	elemento será um objeto no formato:
	{ number: [NUMBER] }
	Os números devem ser de 1 a 10.
	Mostre esse array no console.
	*/
	
	let numberObjects = [];
	
	for(let i=0; i<10; i++){
		let obj = {"number": i};
		numberObjects.push(obj);
	}
	
	console.log( 'Number Objects Array:' );
	console.log(numberObjects);
	
	/*
	Crie um array chamado `justNumbers`, que terá como elementos somente os
	números do array criado acima. Mostre esse novo array no console.
	*/
	let justNumbers = [];	
	
	for(let i=0; i<numberObjects.length; i++){
		justNumbers.push(numberObjects[i].number);
	};
	console.log( '\nJust Numbers:' );
	console.log( justNumbers);
	
	/*
	Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
	somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
	no console.
	*/
	let justMod2Or3 = [];
	


}())