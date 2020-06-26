(function() {
	/*1. Envolva todo o conteúdo desse desafio em uma IIFE.
	2. Adicione a diretiva 'use strict';
	3. Crie um arquivo index.html e adicione esse script à ele.
	*/
	'use strict';
	
	/*
	Declare uma variável chamada `name` que receba seu primeiro nome.
	Mostre no console todas as letras do seu nome separadas, com a frase:
	- "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
	Ex: no caso do nome ser "Fernando", deve mostrar as frases:
	- "F é a 1ª letra do meu nome."
	- "e é a 2ª letra do meu nome."
	E assim por diante, até a última.
	*/
		
	console.log( 'As letras do seu nome:' );
	const name = "Rafael";	
	for(let i = 0; i < name.length; i++) {
		console.log( `${name[i]} é a ${i + 1}ª letra do meu nome.`);	
	}
	
	/*
	- Declare uma variável chamada `fullName`, que receba seu nome completo,
	escrito no formato de slug (caixa baixa e palavras separadas por um traço).
	Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
	- Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
	por um espaço.
	- Detalhe: o código que você escrever abaixo deve funcionar para qualquer
	nome, então fique à vontade para usar as artimanhas que já viu até agora no
	curso para fazer isso funcionar corretamente :)
	- Mostre no console o nome no formato slug, e o resultado final. Use um
	console.log para cada formato.
	*/
	console.log( '\nNome convertido à partir de um slug:' );
	
	const fullName = "rafael-gomes-dos-santos";	
	
	console.log(fullName);
	
	let newFullName = fullName.split('-').map(function(palavra) {
		let r = palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
		return r;
	});
	console.log( newFullName.join(' '));
	
	

}())