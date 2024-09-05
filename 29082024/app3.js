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