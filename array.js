const funcoes = require('./functions.js')

/*
  Algo muito comum em programação é trabalharmos com conjuntos/listas de dados.
  Trabalhar com listas de dados pode se tornar problematico, principalmente quando os dados são muitos.
  Vamos usar o exemplo contido em na explicação sobre funcoes.
  Nele, queremos transformar nomes em letras minusculas para letras maiusculas e mostra-los na tela.
  Começamos mais ou menos assim
*/

const nome1 = 'caroline'
const nome2 = 'filipe'
const nome3 = 'guilherme'
const nome4 = 'reviel'
const nome5 = 'samuel'

/*
  Bem, podemos encarar isso como uma lista de nomes, não é? Vamos ver como ficaria
*/

const nomes = ['caroline','filipe','guilherme','reviel','samuel']

/*
  bem mais limpo, não é? Mas eai? E agora?
  Bem, isso se chama um ARRAY. ARRAYS são listas de coisas. Podem se listas de numeros, nomes, letras. Qualquer coisa. Até listas de listas.
  Cada coisa dentro do array é identificado por sua posição, começando de 0 até N-1, onde N é o numero de coisas dentro do array.
  No nosso exemplo, existem 5 nomes dentro do array, então N = 5.
  'caroline' é o primeiro nome no array, então a posição dela é 0
  'filipe' é o segundo nome no array, então sua posição é 1
  e assim por diante, até 'samuel' que tem a posição 4
  Podemos acessar os nomes pelas suas posições
*/

console.log(nomes[0]) //caroline
console.log(nomes[1]) //filipe
console.log(nomes[4]) //samuel

/*
  arrays tornam mais faceis as operações com um numero grande de dados.
  em javascript existem muitas operações/funções ja prontas para facilitar esse uso.
  Para exemplificar, vamos ver o método "map".

  O nome "map" vem de "mapear". Quando você chama o método "map" em um array ele vai passar
  por todos os elementos desse array e aplicar alguma funcao (voce decide qual funcao) sobre cada um.
  No fim, ele vai retornar um array contendo os resultados de cada operacao em cada elemento.

  Vamos usar a funcao "transformarParaMaisculaEMostrarNaTela" da explicação de funcoes para exemplificar
*/

nomes.map(funcoes.transformarParaMaisculaEMostrarNaTela)

//caroline CAROLINE
//filipe FILIPE
//guilherme GUILHERME
//reviel REVIEL
//samuel SAMUEL
