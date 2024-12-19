// Escribe un programa que recorra un array de edades [18, 25, 14, 32, 16, 40] usando un bucle y clasifique cada edad como "Mayor de edad" o "Menor de edad". Imprime cada edad con su clasificación.

function menorMayorEdad() {
    let edades = [18, 25, 14, 32, 16, 40]
    let menorEdad = []
    let mayorEdad = []

    for (i = 0; i <= 5; i++) {
        if(edades[i] <= 18) {
            menorEdad.push(edades[i])
            console.log(`${edades[i]}, Menor de edad`)
        } else {
            mayorEdad.push(edades[i])
            console.log(`${edades[i]}, Mayor de edad`)
        }
    }
}