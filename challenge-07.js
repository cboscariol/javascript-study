//operador %
//retorna o resto de uma divisão
//temos 5 carros para 2 pessoas, não podemos cortar um carro no meio
//então precisamos saber quantos carro sobrarão

const calcCars = (cars, people) => {
  return cars % people
}

console.log(calcCars(5, 2))

//como mostrar só numeros pares

const getEvenNumbers = (x) => {
  while (x <= 30) {
    x % 2 === 0 ? console.log(x) : ''
    x++
  }
}

getEvenNumbers(0)

//push - inclui item no final do array

const arr = ['Camila', "Victor"]
arr.push("Orion")

console.log(arr) //[ 'Camila', 'Victor', 'Orion' ]

//loop for

//for(inicializador, condição, expressão final)

for (let num = 0; num <= 20; num++) {
  console.log(num)
}

/*
Crie um array com 5 items (tipos variados).
*/
const array = ['Camila', true, { nome: 'Camila' }, 28, ['Victor', 'Bicudo']]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
const addItem = (item) => {
  array.push(item)
  console.log(array)
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem(['Camila', false, 0])

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é '${array[1]}'.`)

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem '${array.length}' itens..`)

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem '${array[array.length - 1].length}' itens..`)

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
let par = 10
while (par >= 10 && par <= 20) {
  par % 2 === 0 ? console.log(par) : ''
  par++
}
// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
let impar = 10
while (impar >= 10 && impar <= 20) {
  impar % 2 !== 0 ? console.log(impar) : ''
  impar++
}// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for (let par = 100; par <= 120; par++) {
  par % 2 === 0 ? console.log(par) : ''
}

for (let impar = 111; impar <= 125; impar++) {
  impar % 2 !== 0 ? console.log(impar) : ''
}


