/*
Crie um array com 5 items (tipos variados).
*/
let myList = [190, 'foo', {"name": "Rafael", "surname": "Gomes"}, ["Abacaxi", "Morango", "Tangerina"], function() {return null}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
let addItem = (item) => {
	myList.push(item);
	return myList;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem(["bar", 33.3, true]);
console.log(myList);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é ${myList[5][1]}.`);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${myList.length} itens.`);

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${myList[1].length} itens.`);

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
let n1 = 10;
let evenNumbers = [];
while (n1 <= 20) {		
	if (n1 % 2 == 0) evenNumbers.push(n1); 	
	n1++;
}
console.log('Números pares entre 10 e 20:', evenNumbers);

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
let n2 = 10;
let oddNumbers = [];
while (n2 <= 20) {		
	if (n2 % 2 == 1) oddNumbers.push(n2); 	
	n2++;
}
console.log('Números ímpares entre 10 e 20:', oddNumbers);

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
let evenNumbers2 = [];
for(let i = 100; i <= 120; i++ ) {
	if (i % 2 == 0) evenNumbers2.push(i); 	
}
console.log('Números pares entre 100 e 120:', evenNumbers2);


let oddNumbers2 = [];
for(let i = 111; i <= 125; i++ ) {
	if (i % 2 == 1) oddNumbers2.push(i); 	
}
console.log('Números ímpares entre 111 e 125:', oddNumbers2);