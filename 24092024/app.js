let eleccion= prompt(`Eliga la actividad
    A) simbolos Horizontal o Vertical
    B) simbolos Horizontal y Vertical
    C) Cuadrado de simbolos
    D) Tabla de multiplicar del 1`);

if(eleccion=="a"){
    let contador=0;
    let mensaje="";
    let sentido=prompt(`Eliga:
        A)Horizontal
        B)Vertical`);
    console.log(sentido);
    if(sentido=="a"){
        while(contador<4){
            mensaje+="a";
            contador++;
        }
    }else
    if(sentido=="b"){
        while(contador<4){
            mensaje+="x\n";
            contador++;
        }
    }else{alert("opcion incorrecta")}
    alert(mensaje);

}else if(eleccion=="b"){
    let contador=0;
    let mensaje="";
    
        while(contador<7){
            if(contador<3){
                mensaje+="x";
                contador++;
            }else{
                mensaje+="x\n";
                contador++;
            }
        }
    alert(mensaje);
}else if(eleccion=="c"){
    let contador=0;
    let mensaje="";
    
        while(contador<4){
                mensaje+="x x x x\n";
                contador++;
        }
    alert(mensaje);
}else if(eleccion=="d"){
    let contador=1;
    let mensaje="";
    
        while(contador<11){
                mensaje+=`${contador}x1 = ${contador}\n`;
                contador++;
        }
    alert(mensaje);
}