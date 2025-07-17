/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

console.log(`Ejercicio 1`)

const suma = (a = 0, b = 0) => {return a + b}
console.log(suma(1, 2))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

console.log(`Ejercicio 2`)

const numerosRandom = [12, 5, 27, 3, 93, 42, 7];
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

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
console.log(`Ejercicio 3`)

let texto = `el tamal se come con tortilla`
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

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

console.log(`Ejercicio 4`)

function aMayusculas(lista){
    for(let i = 0; i < lista.length; i++){
        lista[i] = lista[i].toUpperCase()
    }
    return lista
}

let palabras = ["hola", "mundo", "javascript", "Funciones"];
console.log(aMayusculas(palabras));
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado