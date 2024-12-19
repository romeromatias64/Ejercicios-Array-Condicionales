// Pide al usuario un número entero positivo y usa un bucle para invertirlo. Por ejemplo, si el usuario ingresa 12345, el programa debe devolver 54321.

function invertirNumero() {
    let numero = prompt("Ingresa un numero entero positivo")

    if(isNaN(numero) || numero < 0 || numero === null) {
        alert("El valor ingresado no es correcto.")
    } else {
        let numInvertido = ""

        for(let i = numero.length - 1; i >= 0; i--) {
            numInvertido += numero[i]
            console.log(numero.length - 1)
        }
        document.write(`El numero invertido es ${numInvertido}`)
    }
}