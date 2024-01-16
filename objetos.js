var pessoa = {
    nome: 'luisa',
    sobrenome: 'sonza'
};
console.log(pessoa['sobrenome']);

var pessoa1 = new Object();
pessoa1.nome = "angela";
pessoa1.sobrenome = "silva";
pessoa1.falaNome = function(){
    console.log("nome é: " + this.nome);
}
pessoa1.falaNome();

function criarpessoa(nome, sobrenome){
    return {nome, sobrenome};
}

var p1 = criarpessoa("lucas", "silva");
var p2 = criarpessoa("arthur", "almeida");

console.log(p1);