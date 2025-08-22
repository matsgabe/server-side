/* 1. Crie uma função para converter graus célsius em graus fahrenheit e outra para
conversão contrária, de modo que o usuário escolha o tipo de conversão.
*/

const read = require(`readline-sync`)

let opcao = ""
let temperatura = 0

function celsiusToFahrenheit(celsius) {
    let celsiusInf = (celsius * 9) / 5 + 32
    console.log(celsius + ` C é °` + parseFloat(celsiusInf.toFixed(2)))
}

function fahrenheitToCelsius(fahrenheit) {
    let fahrenheitInf = ((fahrenheit - 32) * 5) / 9
    console.log(fahrenheit + ` F é °`+ parseFloat(fahrenheitInf.toFixed(2)))
}

temperatura = read.question("Informe a temperatura: ")
opcao = read.question("Escolha `F` para Fahrenheit para Celsiu e `C` de Celsius para Fahrenheit: ")

if (opcao == `F` || opcao == `f`) {
    fahrenheitToCelsius(temperatura)
} else if (opcao == `C` || opcao == `c`) {
    celsiusToFahrenheit(temperatura)
} else {
    console.log('Programa não aceita outro tipo de conversão')
}