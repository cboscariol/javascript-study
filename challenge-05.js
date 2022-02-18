//Parâmetros de Funções como arrays e objetos

//como pegar um valor de um objeto \/

// const obj = {
//     nome: "Camila",
//     idade: 28,
//     work: true
// }

// obj.nome => retorna 'Camila'
// const lala = nome
// obj[lala] => retorna 'Camila'

// const myFunction = (arg) => {
//     return arg
// }

// console.log(myFunction(obj).nome) //retorna Camila

// const myFunction2 = (arg) => {
//     return arg.nome
// }

// console.log(myFunction2(obj)) //retorna Camila

/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const nomes = ['Camila', 'Victor', 'Orion', 'Daniele', 'Solange'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
const returnArray = (array) => {
    console.log(array)
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
returnArray(nomes[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
const returnIndex = (array, nun) => {
    console.log(array[nun])
}

returnIndex(nomes, 2)
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const arrayValores = ['Camila', 1, true, ['Victor', 'Orion'], false];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
returnArray(arrayValores)

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
const book = (bookName) => {
    const booksInfos = {
        book1: {
            quantidadePaginas: 200,
            autor: 'Camila',
            editora: 'Blabla'
        },
        book2: {
            quantidadePaginas: 400,
            autor: 'Victor',
            editora: 'Blabla'
        },
        book3: {
            quantidadePaginas: 20,
            autor: 'Orion',
            editora: 'Blabla'
        }
    }

    const book = booksInfos[bookName]

    if (!book) {
        return booksInfos
    }

    return `
        O livro ${bookName} tem ${book.quantidadePaginas} páginas.
        O autor do livro ${bookName} é ${book.autor}.
        O livro ${bookName} foi publicado pela editora ${book.editora}.
    `

    // obj.value
    // obj[variavel]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// const result = book('book2')
// console.log(result)

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
const result = book('book2')
console.log(result)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?

