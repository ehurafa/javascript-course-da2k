(function() {
	/*
	Envolva todo o conteúdo desse arquivo em uma IIFE.
	*/
	
	/*
	Crie um objeto chamado `person`, com as propriedades:
		`name`: String
		`lastname`: String
		`age`: Number
	Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
	de valor para cada propriedade.
	*/
	let person = {
		"name": "Erik",
		"lastname": "Santos",
		"age": 18
	}
	
	/*
	Mostre no console, em um array, todas as propriedades do objeto acima.
	Não use nenhuma estrutura de repetição, nem crie o array manualmente.
	*/
	
	
	/*
	Crie um array vazio chamado `books`.
	*/
	let books = [];
	
	
	/*
	Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
	seguintes propriedades:
	`name`: String
	`pages`: Number
	*/
	
	books.push({"name": "101 dias em Bagdá", "pages": 890});
	books.push({"name": "Grande sertão", "pages": 330});
	books.push({"name": "Não conte a ninguém", "pages": 515});
	
	console.log( 'Lista de livros:' + JSON.stringify(books));
		
						
}())