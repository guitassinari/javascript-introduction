/*
  Repetir operações é algo MUITO comum e necessário em programação.
  Mas repetir CÓDIGO é horrivel. Repetir código faz com que você, caso tenha que mexer nele de novo, tenha que
  mexer em cada linha que repete o código que você fez. Por exemplo, digamos que você tem varios nomes em letras minusculas
  e quer deixa-los em letra maiuscula e mostrar na tela o nome em minusculo e maisculo. Você poderia fazer assim:
*/


const nome1 = 'caroline'
const nome2 = 'filipe'
const nome3 = 'guilherme'
const nome4 = 'reviel'
const nome5 = 'samuel'

const nome1Maiusculo = nome1.toUpperCase()
const nome2Maiusculo = nome2.toUpperCase()
const nome3Maiusculo = nome3.toUpperCase()
const nome4Maiusculo = nome4.toUpperCase()
const nome5Maiusculo = nome5.toUpperCase()

console.log('\SEM FUNCOES:')

console.log(nome1, nome1Maiusculo) //caroline CAROLINE
console.log(nome2, nome2Maiusculo) //filipe FILIPE
console.log(nome3, nome3Maiusculo) //guilherme GUILHERME
console.log(nome4, nome4Maiusculo) //reviel REVIEL
console.log(nome5, nome5Maiusculo) //samuel SAMUEL


/*
  Agora imagine se você quisesse colocar apenas a PRIMEIRA LETRA de cada nome em maisculo e, no fim, mostrar na tela
  apenas o nome com a primeira letra maiuscula. Você teria que modificar, pelo menos DEZ. FUCKING. LINHAS.
  Imagine isso num código maior e mais complexo. Ia ficar dificil.
  Por isso que existem funções!
  Vamos criar uma função que faça exatamente o que queremos: transformar o nome em maisculo e mostrar na tela
*/


//Aqui em cima coloamos a palavra "function" para dizer que queremos criar uma funcao
//Depois vem o nome da funcao, que vai servir para executarmos ela depois
//Dentro dos parenteses entram os parametros da funcao. Sao valores que passamos para a funcao para que ela possa executar o que queremos
function transformarParaMaisculaEMostrarNaTela(nome)
{
  //Aqui dentro fica o corpo da funcao. ou seja, aqui esta o que a funcao realmente FAZ
  const nomeMaiusculo = nome.toUpperCase()
  console.log(nome, nomeMaiusculo)
}


/*
  Agora que temos uma funcao que faz o trabalho pra nos, basta executarmos ela e tudo vai sair como esperamos
*/
console.log('\nCOM FUNCOES:')

transformarParaMaisculaEMostrarNaTela(nome1) //caroline CAROLINE
transformarParaMaisculaEMostrarNaTela(nome2) //filipe FILIPE
transformarParaMaisculaEMostrarNaTela(nome3) //guilherme GUILHERME
transformarParaMaisculaEMostrarNaTela(nome4) //reviel REVIEL
transformarParaMaisculaEMostrarNaTela(nome5) //samuel SAMUEL


/*
  Agora, se quisermos modificar alguma coisa, só teremos que mexer nas linhas da função, ou seja, no maximo DUAS. FUCKING. LINHAS!
*/
