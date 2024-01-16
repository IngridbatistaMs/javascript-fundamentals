var carro = [{modelo: 'audio a3', marca: 'audi', ano: 2020},
{modelo: 'civic', marca: 'corolla', ano: 2022}]

for (let caracteristica in carro){
    console.log(carro[caracteristica].marca);
}


for (let c of carro){
    console.log(c.ano)
}

var c =1;
while (c <= 10){
    console.log(c);
    c++;
}

var t = 1;
do{
    console.log(t);
    t++
}while(t < 6)