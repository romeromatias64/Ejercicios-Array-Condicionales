// Escribe un programa que use un bucle para pedir al usuario números enteros. Suma esos números y detén el bucle cuando el acumulado sea mayor o igual a 100. Muestra el total acumulado.

function sumarNumeros() {
    let resultado = 0

    while(resultado < 100) {
        let numero = parseInt(prompt("Ingresa un número"))

        if(!isNaN(numero)) {
            resultado += numero
        } else {
            alert("No se ingresó un numero válido, intenta de nuevo.")
        }
    }

    document.write(`El total acumulado es ${resultado}`)

}