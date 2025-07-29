/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

console.time("Start")
console.group(`Ejercicio 1`)

const suma = (a = 0, b = 0) => {return a + b}
console.log(suma(5, 7))

console.groupEnd()
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

console.group(`Ejercicio 2`)

const numerosRandom = [100, 10, 13, 1, 1000];
function funcMayor(array){
    let mayor = 0
    for(let i = 0; i < array.length; i++){
        let compara = false
        compara = mayor < array[i]
        if(compara){
            mayor = array[i]
        }
    }
    return mayor
}
console.log(funcMayor(numerosRandom)
)

console.groupEnd()
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
console.group(`Ejercicio 3`)

let texto = `Nunca terminare one piece`
const nuevaFuncion = function(palabra){
    let vocales = ['a', 'e', 'i', 'o', 'u']
    let i = 0
    for(let value of palabra){
        for(let string of vocales)    
            if(string == value){
                i++
            }
    }
    return i
}

console.log(nuevaFuncion(texto))
console.groupEnd()
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

console.group(`Ejercicio 4`)

function aMayusculas(lista){
    for(let i = 0; i < lista.length; i++){
        lista[i] = lista[i].toUpperCase()
    }
    return lista
}

let palabras = ["Cafe", "papa", "cubiertos"];

console.log(aMayusculas(palabras));

console.groupEnd()
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
console.group(`Ejercicio 5`)

const esPrimo = (numero) => {
        for(let i = 2; i < numero; i++){
            if(numero%i != 0){
                return 'Es primo'
            }else return 'No es primo'
        }

}

console.log(esPrimo(12)) // No es primo

console.groupEnd()
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
console.group(`Ejercicio 6`)

function comunes(array1, array2){
    let comunes = []
    for(let elemento of array1){
        for(let elemento2 of array2){
            if(elemento == elemento2){
                comunes.push(elemento)
            }
        }
    }
    return comunes
}
const listaA = ["Agua", "Celular", "wampi", "Degranar", "Conector", "Camiseta", "Pelo"]
const listaB = ["Pelo", "Nariz", "Moco", "Camiseta", "Keneth", "Agua", "Wampi"]
console.log(comunes(listaA, listaB))

console.groupEnd()
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
console.group('Ejercicio 7')

let numer = [12, 5, 13, 1, 8, 144, 78, 32]

function sumaMayores(array){
    let suma = 0
    for(let value of array){
        if(value%2 == 0){
            suma += value        
        }
    }
    return suma
}

console.log(sumaMayores(numer))

console.groupEnd()
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
console.group('Ejercicio 8')

const numPot = (array) => {
    let nuevoArray = []
    for(let value of array){
        nuevoArray.push(value ** 2)
    }
    return nuevoArray
}

console.log(numPot(numer))

console.groupEnd()
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
console.group('Ejercicio 9')

const inverted = (string) => {
    let palInvertida = []
    for(let value of string){
        palInvertida.unshift(value)
    }
    palInvertida= palInvertida.join('')
    return palInvertida
}

console.log(inverted('One Piece'))

console.groupEnd()
// 10. Crea una función que calcule el factorial de un número dado
console.group('Ejercicio 10')

function factorial(int){
    let resFactorial = 1
    for(let i = int; i > 0; i--){
        
        resFactorial = resFactorial * i
    }
    return resFactorial
}

let nuevoNumero = 2

console.log(factorial(nuevoNumero))

console.groupEnd()
console.timeEnd("Start")