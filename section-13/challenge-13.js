(function() {
	/*
	Envolva todo o conteúdo desse arquivo em uma IIFE.
	*/
	
	/*
	Crie um array e mostre no console a representação em String desse array,
	usando o método visto na aula 13.
	*/
	
	let arr = ['azul', 'amarelo', 'vermelho', 'preto'];
	console.log( 'O array em formato de string é:' );
	console.log(arr.toString());
	
	/*
	Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
	Cada array deve conter os estados dessa região.
	*/
	let sul = ['Paraná', 'Santa Catarina', 'Rio Grande do Sul'];
	let sudeste = ['Minas Gerais', 'São Paulo', 'Espirito Santos', 'Rio de Janeiro'];
	
	/*
	Crie uma variável chamada `brasil`, que irá receber as duas regiões
	concatenadas. Mostre o `brasil` no console.
	*/
	let brasil = sul.concat(sudeste);
	console.log( '\nAlguns Estados do Brasil:' );
	console.log(brasil);
	
	/*
	Adicione 3 novos estados da região Norte no início do array e mostre no console.
	*/
	brasil.unshift('Amapá', 'Pará', 'Roraima');
	console.log( '\nMais estados adicionados:' );
	console.log(brasil);
	
	/*
	Remova o primeiro estado do array `brasil` e mostre-o no console.
	*/
	let removido = brasil.shift();
	console.log( '\nEstado removido:' );
	console.log(removido);
	
	/*
	Crie um novo array chamado `newSul`, que receba somente os estados do sul,
	pegando do array `brasil`. Não remova esses itens de `brasil`.
	*/
	let newSul = brasil.slice(2,5);
	/*
	Mostre no console os estados que estão em `newSul`.
	*/
	console.log( '\nEstados do Sul do Brasil:' );
	console.log(newSul);
}())