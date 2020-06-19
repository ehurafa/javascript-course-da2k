(function() {
	/*
	Envolva todo o conteúdo desse arquivo em uma IIFE.
	*/
	
	
	/*
	Crie uma função construtora chamada "Person". Esse construtor deve ter
	as seguintes características:
	- Deve receber 3 parâmetros: `name`, `lastName` e `age`;
	- Deverá ter 3 propriedades:
	  - `name` - que receberá o valor do parâmetro `name`;
	  - `lastName` - que receberá o valor do parâmetro `lastName`;
	  - `age` - que receberá o valor do parâmetro `age`;
	- Deverá ter 3 métodos:
	  - `getFullName` - que deve retornar o nome completo do objeto criado,
	  no formato:
		- "[NAME] [LASTNAME]"
	  - `getAge` - que deverá retornar a idade (age);
	  - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
	  iremos passar um único argumento, que é a quantidade de anos que devem ser
	  adicionados à idade original (age). Esse método deverá retornar o objeto
	  que será instanciado.
	*/
	// ?
	
	const Person = () => {
		return {
			"name": name,
			"lastName": lastName,
			"age": age,
			"getFullName": () => {
				return `${this.name} ${this.lastName}`
			}
			"getAge": () => {
				return this.age
			}
			"addAge": () => {
				
			}
			
		}
	}


}())