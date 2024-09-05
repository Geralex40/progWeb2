//function
//en js, es un procedimiento, conjunto de instrucciones. Debe tomas una entrada y devolver una salida donde tengan una relacion obvio

//la logica en js es gerarquico, primero agarra las funciones y despues las ejecuta, no es secuencial
saludar();
//jerarquisan, a pesar de que esto se leea primero, se guarda y se ejecuta cuando sea su turno

function saludar(){
    console.log("Hola");
    alert("Hola desde un Alert")
}

saludar();

function despedida(nombreUsuario){
    console.log("Adios ",nombreUsuario);
}
despedida("Alex");


//console.log(return());

//1) menu 3 opciones
function menu(){
    let opciones = prompt(` 
        Elija una opcion:
        1- Libros
        2-Peliculas
        3-Juegos
        `);//este prompt nos dara siempre un string, aqui aun que eligamos un num, lo dara como string
    
        switch(opciones){
            case "1":
                console.log("libro")
                break;
    
            default:
                console.log("Opcion invalida")
    
            case "2":
                console.log("peli")
                break;
    
            case "3":
                console.log("juego")
                break;
    
        }
}

//2)funcion while
function unWhile(){
    num=2
while(num!=10){
    console.log("a")
    num++
}
}

//3) Usando numeros random en juego de adivinar numero
function numRandom(){
    let numeroMaquina= Math.floor(Math.random()*(10-1)+1);
console.log(numeroMaquina)

let vidas=5

while(vidas>0){
    let intento = prompt(`Adivine un numero del 1 al 10`)
    if(intento==numeroMaquina){
        let correcto=prompt("Correcto!")
        vidas=0
    }
    else{
        if(intento!=numeroMaquina && vidas>1){
            vidas--
            let incorrecto=prompt("Incorrecto, vuelva a intentar (porvafor dele enter a este mensaje para volver a intentar)")
        }
        else{
            let terminado=prompt("Juego terminado")
            vidas--
        }
    }
}
}

//4) Bases de los arreglos
function arreglos(){
    let frutas=["manzana","piña","s","s","pozole Wort Wort Wort","jicama"];

console.log(frutas);//aqui si no pongo el punto y coma al fina, no me muestra tantos detalles en la consola
console.log(frutas[1])
console.log(frutas[8])//una variable a la q no se le ah declarado en absoluto
console.log("El tamaño del arreglo es: ",frutas.length)//tamaño de longitud
}

//5) Usando los arreglos y explicando dif entre let, var y cons
function arreglosDos(){
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

}

console.log("1) Menu con case\n")
menu();

console.log("2) Funcion while\n")
unWhile();

console.log("3) Usando numeros random\n")
numRandom();

console.log("4) Usando arreglos\n")

console.log("5) Usando arreglos, let, var y char\n")
arreglosDos();