// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
const sum = (a, b) => a + b;

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
// Qual o valor atualizado dessa variável?
console.log(sum(3,3));

// Declare uma nova variável, sem valor.
let _new = null;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
callNew = () => {
	return _new = '"NOVA"';
}

// Invoque a função criada acima.
// Qual o retorno da função? (Use comentários de bloco).
console.log('O valor da variável _new agora é ' + callNew());

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
let secondFunction = (a, b, c) => {
	if(!a || !b || !c) {
		return 'Preencha todoso os valore corretamente!';
	} else {
		return (a * b * c) + 2;
	}
	
} 

console.log(secondFunction(6));

// Invoque a função criada acima, passando só dois números como argumento.
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
console.log(secondFunction(12,98));

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
console.log(secondFunction(9, 8, 6));

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
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

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(thirdFunction(5)); 
console.log(thirdFunction(5,6));
console.log(thirdFunction(99,5,7));
console.log(thirdFunction());