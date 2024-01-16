class pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log("olá " + this.nome);
}
    get nomecompleto(){
        console.log("olá " + this.nome + " " + this.sobrenome);
    }
}

p1 = new pessoa("livia", "marques");
p1.falar();
p1.nomecompleto;