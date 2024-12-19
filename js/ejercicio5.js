// Dado un array de números [23, 45, 12, 67, 34, 89, 21], escribe un programa que use un bucle para encontrar el número más grande. Usa condicionales para comparar los valores.


let listaNumeros = [23, 45, 12, 67, 34, 89, 21]
let numeroMasGrande = listaNumeros[0]

function numMayor() {
    for(let i = 1; i < listaNumeros.length; i++) {
        if(listaNumeros[i] > numeroMasGrande) {
            numeroMasGrande = listaNumeros[i]
        }
    }
    
    document.write(`${numeroMasGrande} es el número mas grande.`)
}
