/*
Crie uma IIFE que envolva todo esse arquivo (inclusive esse comentário),
e faça a indentação correta.
*/
(function() {
	/*
	Sem alterar os códigos nos `console.log` abaixo, faça com que o retorno
	deles seja "true", usando os Wrapper Objects como "conversores" nos valores
	das variáveis. Analise o que está sendo impresso no console para saber como
	resolver o problema corretamente.
	*/
	var five = +'5';
	console.log( five + ' é número?', typeof five === 'number' );
	var concat = 10 + 10;
	concat = concat.toString();
	console.log( '"' + concat + '" é uma string? E é igual a "1010"?', typeof concat === 'string' );
	
	/*
	Voltando ao exemplo da calculadora, vamos utilizar mais uma abordagem
	funcional, mas dessa vez, separando algumas responsabilidades.
	- Primeiro, crie um objeto chamado `operation` que terá as propriedades:
	'+', '-', '*', '/' e '%'.
	- Cada propriedade vai receber uma função (logo, elas serão métodos), e essa
	função receberá dois parâmetros e retornará a operação referente à sua
	propriedade, usando os valores passados por parâmetro.
	*/
	
	let operation = {
		'+': function(a, b) {return a + b;},
		'-': function(a, b) {return a - b;},
		'*': function(a, b) {return a * b;},
		'/': function(a, b) {return a / b;},
		'%': function(a, b) {return a % b;}
	}
	
	/*
	Crie uma função chamada `isOperatorValid`, que receberá um operador por
	parâmetro.
	- Essa função será responsável por verificar se o operador passado por
	parâmetro a ela é válido, ou seja, se ele é igual a '+', '-', '*', '/' ou
	'%'.
	- Se for igual a qualquer um desses, ela deverá retornar "true".
	Caso contrário, "false".
	- O desafio é fazer o retorno sem usar "if" ou "switch".
	*/
	
	let isOperatorValid = (op) => {
		
	}
		
	
}())