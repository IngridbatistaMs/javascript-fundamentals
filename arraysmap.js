var numeros = [1,2,3,4,5,6,7,8,9,10];

var num = numeros.map(function(valor){
    return valor * 2;
});
console.log(num);

var funcionarios = [
    {nome: "luiz", idade: 62},
    {nome: "davi", idade: 22},
    {nome: "arthur", idade: 18},
    {nome: "lucas", idade: 40},
]

nomes = funcionarios.map(pessoa => pessoa.nome);
console.log(nomes);

var numeros = [1,2,3,4,5,6,7,8,9,10];
var tot = numeros.reduce(function(total,numero){
    return total + numero;
}, 0);