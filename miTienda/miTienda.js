let carrito=[];
let precios=[];
let total=0;

function menu(){ //funcion para enseñar el menu principal
    //ponemos parse int para que tomemos la respuesta del usuario como un int
    return parseInt(prompt(`Seleccione el producto a agregar:
    1- Zapatos
    2- Tenis
    3- Chanclas
    4- Huaraches
    5- Botas
    6- Tacones
9- Ver carrito
10- Terminar compras`))
}

function guardarEnCarrito(nombre,valor){//con esta funcion guardamos el articulo como un objeto dentro del arreglo del carrito, con un nombre y un valor monetario
    let item={
        nombre:nombre,
        valor:valor
    };
    carrito.push(item);
    console.log(`se agrego "${item.nombre}" al carrito`)
    console.log("Total a pagar actualmente: "+(total+=item.valor))
}

function verCarrito(){//con esta funcion podemos ver todos los objetos del arreglo, solo sus nombres y su ubicacion
    if (carrito.length==0) {
        alert("No hay articulos en el carrito")
    }else{
        let mensajeConTodoElCarrito="Carrito actual:\n";
        carrito.forEach((nombre,index)=>{
            mensajeConTodoElCarrito+=`${index+1}.- ${(carrito[index].nombre)} \n`
        })
        mensajeConTodoElCarrito+="Total a pagar: "+total;
        alert(mensajeConTodoElCarrito)
    }

}



function eleccion(){ //funcion que, dependiendo del resultado en la funcion menu, nos agregamos al carrito
    let continuar=true;//usamos esta variable para hacer que se repita el while hasta que le digamos que no, con la opcion 10
    while(continuar){
        let prenda=menu();//aqui le decimos que la nueva variable "prenda" tendra el valor que obtendra al ejecutar la funcion menu()
        switch(prenda){
            case 1:
                guardarEnCarrito("Zapatos", 100)
                break;
            case 2:
                guardarEnCarrito("Tenis", 300)
                break;
            case 3:
                guardarEnCarrito("Chanclas", 40)
                break;
            case 4:
                guardarEnCarrito("Huaraches", 150)
                break;
            case 5:
                guardarEnCarrito("Botas", 700)
                break;
            case 6:
                guardarEnCarrito("Tacones", 1000)
                break;
            
            case 9:
                verCarrito();
                break;

            case 10:
                alert("Gracias, vuelva pronto")
                continuar=false;
                break;

            default:
                alert("Opcion invalida, intente de nuevo");
                break;
            
        }
}
}

//mandamos a llamar las funciones por que si no no saldran nunca
eleccion();
