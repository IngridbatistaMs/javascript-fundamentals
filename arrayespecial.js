var numeros = [1,2,3,4,5,6,7,8,9,10];

var resultado = numeros.filter(item => item % 2 == 0);
console.log(resultado);

var numerofiltrados = numeros.filter(
    function(valor){
        return valor > 5;
    }
);

console.log(numerofiltrados);

function buscarvalores(valor){
    return valor < 5;
}
var numerosencontrados = numeros.filter(buscarvalores);
console.log(numerosencontrados);

