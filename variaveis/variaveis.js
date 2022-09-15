//Repare na variável apresentacao mostrada a seguir. 
//Ela é uma string que representa um texto que pode mudar conforme o valor de outras variáveis.
//Identifique e crie todas as variáveis necessárias para que o texto de apresentacao seja exibido sem erros. 
//Depois, crie a variável apresentacao exatamente como mostrado a seguir e a imprima da seguinte forma: console.log(apresentacao).
//apresentacao = "Meu nome é " + nomeCompleto + " (sou conhecido[a] como " + apelido + ") e tenho " + idade + " anos. Nasci no dia " + dataNascimento + ", na ci...

nomeCompleto = "Claudia Mayer Lauxen";
apelido = "Clau";
idade = 22;
dataNascimento = "23 de novembro de 1999";
localNascimento = "Novo Hamburgo";
altura = 1.65;
trabalhando = true;
apresentacao = "Meu nome é " + nomeCompleto + " (sou conhecido[a] como " + apelido + ") e tenho " + idade + " anos. Nasci no dia " + dataNascimento + ", na cidade de " + localNascimento + ". Tenho " + altura + "m de altura e atualmente estou " + (trabalhando ? "empregado" : "desempregado") + "."
console.log(apresentacao)