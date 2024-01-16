var valores = [8,1,7,2,9];

console.log(valores[3]);

console.log("Array invertido: " + valores.reverse());


for (var pos = 0 ; pos < valores.length; pos++){
    console.log("position: " + pos + " valor: " + valores[pos]);
}


//calcular a média de todos os números de um array
var soma = 0;
for (var pos = 0 ; pos < valores.length; pos++){
    soma+= valores[pos];
}
var media = soma/valores.length;
    console.log(media);

//localicar o maior valor dentro de um array de número
var maior
var numeros = [10,22,7,2,90];
    for(var i = 0; i < numeros.length; i++){
        if(i == 0 || numeros[i] > maior) {
            maior = numeros[i]
        }
    }
console.log(maior);
//retornar qual a cidade tem o maior número de letras
var maiorCidade 
var cidades = ["icapui", "aracati", "saoPaulo", "recife","pernambuco"];
    for(var i = 0; i < cidades.length; i++){
        if(i == 0 || cidades[i].length > maiorCidade.length){
            maiorCidade = cidades[i]
        }
    }
console.log(maiorCidade);

var arr1 = [1,2,3,4,5,6,7,8,9,10];

console.log(arr1.join('|'));

var retirado = arr1.shift();

console.log(retirado);

console.log(arr1);

console.log("posição do número 3: " + arr1.indexOf(3));

arr1.push(11);
console.log(arr1);

arr1.pop();
console.log(arr1);

var arr2 = [1,2,3,4,5,6,7];

arr2.splice(2,3);

console.log(arr2);

var nomes = ["manu", "romulo", "ingrid", "apollo"];
var novos = nomes.splice(1,1,"joão");

console.log(nomes);

var pessoa = ["eduardo", "davi", "rosana", "wallace"];
//var gerente = ["Romulo", "manuela"];
var pessoa1 = pessoa.slice(1,3);

console.log(pessoa);
console.log(pessoa1);

//var empresa = pessoa.concat(gerente);
//console.log(empresa);

// separar o array de todos os meses em um array trismestral
var meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
console.log(meses.join('|'));

//meses.splice(2,11);
console.log(meses.slice(0,3));
console.log(meses.slice(3,6));
console.log(meses.slice(6,9));
console.log(meses.slice(9,12));