//Crie uma variável mesmoNome que verifica se nomeDoFulano é igual a nomeDoBeltrano
mesmoNome = (nomeDoFulano==nomeDoBeltrano);

//Crie uma variável maiorDeIdade que verifica se idade é de um adulto
maiorDeIdade = (idade >= 18);

//Crie uma variável valorComJuros que calcula o valor de um boleto acrescido de 10% de juros por atraso
valorComJuros = (valorboleto * 1.1 ); 

//Faça a representação da fórmula de média aritmética,
//considerando um conjunto de elementos com 5 elementos nomeados como item1, item2, item3, item4 e item5
mediaItem = (item1+item2+item3+item4+item5) /5;

//O lucro bruto de uma empresa é representado pela receita líquida de vendas menos o custo dos produtos vendidos. 
//A margem bruta de uma empresa é calculada pela divisão do lucro bruto pela receita líquida de vendas. 
//Faça a representação da fórmula da margem bruta, multiplicando o resultado final por 100 para obter o valor percentual
lucroBruto = receitaLiquidaVendas - custoProdutosVendidos
margemBruta = lucroBruto / receitaLiquidaVendas
valorPercentual =  margemBruta * 100

//Usando qualquer ferramenta de codificação, crie um algoritmo seguindo os passos abaixo para encontrar o valor do saldo ao final do processo 
//O saldo da sua conta é R$ 1000,00
//Você decide comprar uma calça por R$ 99,90
//Você recebe o seu salário de R$ 2500,00
//Você está caminhando na rua e decide dar R$ 0,10 para um morador de rua
//Você compra um ar condicionado cujo valor é 25% do seu saldo atual
//Você decide antecipar o pagamento de uma dívida usando metade do seu saldo
//Qual o valor do seu saldo? 
saldo = 1000.00;
saldo = saldo - 99.90;
saldo = saldo + 2500
saldo = saldo - 0.1
saldopor = saldo * 0.25
saldo = saldo - saldopor
saldoporc = saldo * 0.50
saldo = saldo - saldoporc
console.log(saldo)
