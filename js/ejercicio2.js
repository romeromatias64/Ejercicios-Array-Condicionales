// Escribe un programa que use un bucle para imprimir todos los números del 1 al 50. Sin embargo, solo debe mostrar los números pares.

function pares() {
    for(let numeros = 1; numeros <= 50; numeros++) {
        if(numeros % 2 === 0) {
            document.write(numeros + "<br>")
        }
    }
}