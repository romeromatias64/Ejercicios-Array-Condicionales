// Crea un programa que genere un número aleatorio entre 1 y 10. Luego usa un bucle para permitir al usuario adivinar el número. Si el usuario adivina correctamente, felicítalo y detén el bucle. Si no, indica si el número que ingresó es mayor o menor al número generado.

function adivinarNumero() {
    let numAleatorio = Math.floor(Math.random() * 10) + 1
    
    while(true) {
        let intento = parseInt(prompt("Adivina el número entre 1 y 10"))

        
    
        if(intento === numAleatorio) {
            alert("¡Felicitaciones! ¡Adivinaste el número!")
            break
        } else if(isNaN(intento) || intento === null) {
            alert("No se ha ingresado ningun número")
            break
        } else if (intento > numAleatorio) {
            alert(`el número aleatorio es menor que ${intento}. Intentalo de nuevo.`)
        } else {
            alert(`El número aleatorio es mayor que ${intento}. Intentalo de nuevo`)
        } 
        
    }
}