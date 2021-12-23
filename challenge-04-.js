

//Truthy e Falsy

//falsy:

undefined
null
NaN
0
-0
" "
''

//Truthy
//todos os outros
{}
[]

// para verificar se o valor é Truthy e Falsy usar !! 2x

!!"" //retorna true
!!0 //retorna false
!![] //retorna true

//TERNARIO

// condicao ? true : false

/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

const isTruthy = (param) => {
    console.log(!!param)
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

isTruthy(false)
isTruthy(null)
isTruthy(undefined)
isTruthy("")
isTruthy(0)
isTruthy(-0)
isTruthy(NaN)

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy("Camila")
isTruthy([])
isTruthy({})
isTruthy(1)
isTruthy(10 * 10)
isTruthy(20 - 5)
isTruthy([1, 2, 3])
isTruthy(function () {})
isTruthy({ a: 1, b: 2 });
isTruthy('Curso JS Ninja');

/*Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

const carro = {
    marca: "Ford",
    modelo:  "Ka",
    placa:  "DSX-1234",
    ano:  2021,
    cor:  "Preto",
    quantasPortas:  4,
    assentos:  5,
    quantidadePessoas:  0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = (cor) => {
    carro.cor = cor
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = () => {
    console.log(carro.cor)
    return carro.cor
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

carro.obterModelo = () => {
    console.log(carro.modelo)
    return carro.modelo
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = () => {
    console.log(carro.marca)
    return carro.marca
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = () => {
    console.log(`Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}`)
}

carro.obterMarcaModelo()

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos. OK
- O método deve retornar a frase: "Já temos [X] pessoas no carro!" OK
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!" OK
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.adicionarPessoas = function (numeroPessoas) {
    var totalPessoas = carro.quantidadePessoas + numeroPessoas;
    var quantasPessoasCabem =  carro.assentos - carro.quantidadePessoas;
    var pluralOuSingular = quantasPessoasCabem === 1 ? ' pessoa' : ' pessoas';
  
    if (carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos) {
      console.log('O carro já está lotado!') ;
    }
  
    if (totalPessoas > carro.assentos) {
      console.log('Só cabem mais ' + quantasPessoasCabem + pluralOuSingular + '!')
    }
  
    carro.quantidadePessoas += numeroPessoas;
  
    console.log( 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!');
  };

  
/*Qual a cor atual do carro?
*/
carro.obterCor()

// Mude a cor do carro para vermelho.
carro.mudarCor("Vermelho")

// E agora, qual a cor do carro?
carro.obterCor()

// Mude a cor do carro para verde musgo.
carro.mudarCor("verde musgo")

// E agora, qual a cor do carro?
carro.obterCor()

// Qual a marca e modelo do carro?
carro.obterMarcaModelo()

// Adicione 2 pessoas no carro
carro.adicionarPessoas(2)

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoas(4)

// Faça o carro encher.
carro.adicionarPessoas(3); // "Já temos 5 pessoas no carro!"

// Tire 4 pessoas do carro.
carro.adicionarPessoas(-4); // "Já temos 1 pessoas no carro!"

// Adicione 10 pessoas no carro.
carro.adicionarPessoas(10); // // "Só cabem mais 4 pessoas!"

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas)
 // 1