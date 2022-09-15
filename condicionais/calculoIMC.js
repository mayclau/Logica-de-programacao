//faça uma calculadora de imc usando condicionais.
peso = 75
altura  = 1.65

imc = peso / (altura * altura)
console.log("seu imc é de" ,imc)

if(imc<18.50){
    console.log("magreza, grau obesidade 0")
}else if (imc >=18.50 && imc <=24.99){
     console.log ('normal,grau obesidade 0')
}else if(imc >= 25.00 && imc <= 29.99){
    console.log("sobrepeso,grau obesidade 1")
}else if(imc >=30.00 && imc <= 39.99){
    console.log ("obesidade grau 2")
    console.log ("Cuidado! Você está acima do peso recomendado pela OMS.")
}else{
    console.log ("obesidade grau 3")
    console.log ("Cuidado! Você está acima do peso recomendado pela OMS")
    console.log (" É importante procurar um médico para avaliar sua saúde.")

}

