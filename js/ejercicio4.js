function contarVocales() {
    let palabra = prompt("ingrese una palabra")
    palabra = palabra.toLowerCase()

    let contador = 0

    for(let i = 0; i < palabra.length; i++) {
        let letra = palabra[i]
        
        if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            contador++
        }
    }

    document.write(`${palabra} tiene ${contador} vocales`)
}