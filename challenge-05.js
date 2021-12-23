//Parâmetros de Funções como arrays e objetos



const obj = {
    nome: "Camila",
    idade: 28,
    work: true
}

const myFunction = (arg) => {
    return arg
}

console.log(myFunction(obj).nome) //retorna Camila

const myFunction2 = (arg) => {
    return arg.nome
}

console.log(myFunction2(obj)) //retorna Camila

