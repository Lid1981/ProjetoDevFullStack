const nome = "Lidiane" //string
const idade = 43 //number
const altura = 1.61 //number
const maiorDeIdade = true //boolean

console. log("Olá! Meu nome é " + nome + " eu tenho " + idade + " anos e minha altura é " + altura + "m.") //concatenação

console. log("Olá! Você é maior de idade? " + maiorDeIdade) //true

function verificarIdade(idade) { //verificar idade e retornar true ou false
    return idade >= 18;
}
    console.log(verificarIdade(43));

const frase = `Olá! Meu nome é ${nome}, eu tenho ${idade} anos. ` //template string dinâmica

console. log(frase)



