// Crea un programa que use un bucle para generar un triángulo de asteriscos con la siguienteforma, donde el número de filas lo elija el usuario:

// *****
// ****
// ***
// **
// *

function triangulo() {
    const filas = parseInt(prompt("Ingrese el numero de filas del triangulo de asteriscos"))
    
    if(filas > 0) {
        for(let i = filas; i >= 1; i--) {
            let fila = ""
            for(let j = 1; j <= i; j++) {
                fila += "*"
            }
            console.log(fila)
        }
    } else {
        alert("El numero que ingresaste no es positivo.")
    }
}