//Crie um algoritmo capaz de calcular a média aritmética de um array com qualquer quantidade de elementos numéricos.
//Para fins de exemplo, o resultado do algoritmo com um array de valores 1, 2, 3, 5, 8, 13, 21, 23, 34, 55 deve ser 16.5
let numeros = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55];

let soma = 0

for(num=0; num < numeros.length; num++){
    soma = soma + numeros[num]
}

media= soma / numeros.length
console.log(media)