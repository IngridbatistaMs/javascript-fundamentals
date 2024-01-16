class dispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log("já está ligado");
            return;
        }
    this.ligado = true;
    }
}

class smartphone extends dispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

var s1 = new smartphone("iphone", "branco", "11");

console.log(s1);
s1.ligar()
s1.ligar()
//console.log(s1);