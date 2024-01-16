var nome = "Marcelo";
var x = nome.length;
console.log(x);

resultado = x > 15 ? "Obrigado!" : "Por favor preecha o nome completo";
console.log(resultado);

var res = nome.toLocaleUpperCase();
console.log(res);

var res = nome.toLocaleLowerCase();
console.log(res);

var jogo = "Barcelona vs Real melhor time";
var position = jogo.indexOf("Real");
console.log(position);

var cortado = jogo.slice(0,10);
console.log(cortado);

var val = jogo.includes("Real");
console.log(val);

var str1 = "hello";
var str2 = " turma";

var str3 = str1.concat(str2);
console.log(str3);