let frutas=["apple","banan","anana","chiliwillie","palta","aguacate"]

for(let i=0;i<frutas.length; i++){
    console.log(frutas[i])
}

console.log("----------------")

for (let fruta of frutas) {
    console.log(fruta);
    
}

console.log("For in")
for (let fruta in frutas) {//en lugar de enseñarnos los elementos en el arreglo, nos muestra su indice, su ubicacion
    console.log(fruta);
    
}

//let no deja voler a declarar sin el let
let numero=2;
numero=5;

//var si deja volver a declarar con todo y var
var pipi=2;
console.log("var1=",pipi);
var pipi=3;
console.log(pipi)

//const no deja cambiar un valor
const ip=2929
ip=2222//esto nos da un error

