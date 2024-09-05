//parseInt()
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