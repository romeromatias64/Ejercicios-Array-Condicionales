// Usa un bucle para imprimir los números del 1 al 50. Si el número es divisible entre 3,imprime "Fizz". Si es divisible entre 5 imprime "Buzz". Si es divisible entre ambos, imprime "FizzBuzz".

function fizzBuzz() {
    for(let i = 1; i <= 50; i++){
        if (i % 5 === 0 && i % 3 === 0) {
            document.write(`${i} FizzBuzz <br>`)
        } else if(i % 3 === 0) {
            document.write(`${i} Fizz <br>`)
        } else if(i % 5 === 0) {
            document.write(`${i} Buzz <br>`)
        } else {
            document.write(`${i} <br>`)
        }
    }
}
