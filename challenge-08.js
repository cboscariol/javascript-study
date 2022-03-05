//programação funcional

function adder(x) {
  return function (y) {
    return x + y
  };
}

const add2 = adder(2) //atribui adder a uma const e passa o parametro x
console.log(add2(6))//como o retorno de adder já é uma função, quando add2 é chamada, é passado o parametro y


//também pode ser chamado assim:
console.log(adder(2)(3))

//passando objeto como parametro

const person = {
  name: 'Camila',
  idade: 28
}

function getPersosName(personData) {
  return personData.name
}

console.log(getPersosName(person))

//passando outra função como parametro

function showOtherFunction(func) {
  return func()
}

showOtherFunction(function () { console.log('Functional JS ninja') })


/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
const sum = function calculateSum(x, y) {
  console.log(`A soma de ${x} e ${y} é igual a ${x + y}.`)
}

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
sum(10, 22)

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log(`O nome da função que faz a soma é ${sum.name}`)

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName() {
  return 'Camila'
}

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
const varShowName = showName()

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log(`A função ${showName.name} retorna ${varShowName}.`)

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
function calculator(operator) {
  return function doMath(x, y) {
    const operators = {
      '+': function (a, b) { return a + b },
      '-': function (a, b) { return a - b },
      '*': function (a, b) { return a * b },
      '/': function (a, b) { return a / b },
      '%': function (a, b) { return a % b },
    };
    const operation = operators[operator]

    if (!operation) {
      console.log('Operação inválida.')
      return
    }

    const result = operation(x, y)
    console.log(`Resultado da operação: ${x} ${operator} ${y} = ${result}`)
  }
}

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
const sum2 = calculator('+')

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
sum2(1, 2)

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
const subtraction = calculator('-')
const multiplication = calculator('*')
const division = calculator('/')
const mod = calculator('%')

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
console.log(subtraction(10, 2))
console.log(multiplication(10, 2))
console.log(division(10, 2))
console.log(mod(10, 2))
