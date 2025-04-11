const n1 = 10
const n2 = 20
const media = (n1 + n2) / 2 //soma e divisão

console. log(media)

const altura = 5
const largura = 10
const area = (altura * largura) - 3 //multiplcação e subtração

console. log(area)

function verificarMedia(n1, n2){ //declarando a função
    console. log(n1)
    console. log(n2)
}

verificarMedia(10, 20) //chamando a função
verificarMedia(15, 30)


function verificarMedia(n1, n2){ //chamando uma função já declarada
    const media = (n1 + n2) / 2
    console. log(media)
}

verificarMedia(10, 20) //chamando a função
verificarMedia(15, 30)





