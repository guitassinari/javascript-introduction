/*
  "var" é uma palavra reservada para criar uma variavel.
  Este é o jeito antigo de se declarar uma variavel em javascript.
  Para melhorar a linguagem foi criada a palavra reservada "let", que é explicada a seguir.
  Mas é sempre importante saber as raizes da linguagem com a qual voce vai trabalhar
*/
var umaVariavel
umaVariavel = 'sou uma variavel com um valor'
console.log('var umaVariavel:', umaVariavel) //var umaVariavel: sou uma variavel com um valor

umaVariavel = 'outro valor'
console.log('var umaVariavel:', umaVariavel) //var umaVariavel: outro valor


/*
  "let" é uma palavra reservada para criar uma variavel.
  Ela é basicamente igual a "var", mas com algumas diferenças técnicas que não vamos cobrir aqui.
  O importante é saber que "let" veio para substituir "var", e é sempre preferivel que a utilizemos
*/
let outraVariavel
outraVariavel = 'sou outra variavel com um valor'
console.log('let outraVariavel:', outraVariavel) //let outraVariavel: sou outra variavel com um valor

outraVariavel = 'agora tenho outro valor'
console.log('let outraVariavel:', outraVariavel) //let outraVariavel: agora tenho outro valor


/*
  "const" é uma palavra reservada para criar uma constante.
  Constantes são como variaveis, mas que nunca podem ser mudadas.
  Elas sempre devem ser criadas com um valor ja definido e, após definido esse valor, é impossivel altera-la
*/
const nosOdiamos = 'o reviel'
console.log('const nosOdiamos:', nosOdiamos) //const nosOdiamos: o reviel

nosOdiamos = 'o tassinari'
console.log('const nosOdiamos:', nosOdiamos) //const nosOdiamos: o reviel
