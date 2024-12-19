// Crea un programa que solicite al usuario una lista de palabras separadas por comas. Usa un bucle para verificar cuáles de esas palabras son palíndromas y muéstralas. Una palabra es palíndroma si se lee igual al derecho y al revés.

function palindromas(){
    let input = prompt("Ingresar una lista de palabras separadas por comas.")
    
    let palabras = input.split(",")
    
    let palindromas = []
    
    for(let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i].trim().toLowerCase()
    
        let palabraInvertida = palabra.split("").reverse().join("")
    
        if(palabra === palabraInvertida) {
            palindromas.push(palabra)
        }
    
    }

    if(palindromas.length > 0) {
        console.log(`Palabras palíndromas: ${palindromas.join(", ")}`)
    } else {
        console.log(`No hay palíndromas en la lista.`)
    }
}