var país = "Brasil";

if (país != "Brasil"){
 console.log("você é estrangeiro");
}else{
    console.log("você é brasileiro");
}

var idade = 25;

if (idade < 16){
    console.log("não vota")
}else if (idade < 18 || idade > 65){
    console.log("voto opcional")
}else{
    console.log("voto obrigatório")
}

var diasemana = 4;

switch(diasemana){
    case 1:
        console.log("domingo");
        break;
    case 2:
        console.log("segunda")
        break;
    case 3:
        console.log("terça")
        break;
    default:
        console.log("esse dia não exite")
}