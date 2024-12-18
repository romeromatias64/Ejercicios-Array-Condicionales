// Crea un programa que pida al usuario un número del 1 al 100 y use un bucle para imprimir la tabla de multiplicar de ese número. Si la multiplicación da como resultado un número mayor a 1000, detén el bucle.

function tablaMultiplicar() {
    const numero = prompt("Ingresar un numero del 1 al 100")
    
    for(let multi = 1; multi <=10; multi++){
        let resultado = numero * multi
        if(resultado <= 1000) {
            document.write(`${numero} x ${multi} = ${resultado} <br>`)
        }
    }
}
