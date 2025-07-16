/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animales = ['Perro', 'Gato', 'Leon', 'Hipopotamo', 'Elefante']
console.log(animales)
// 2. Añade dos más. Uno al principio y otro al final
animales.push('Oruga')
animales.unshift('Saltamontes')
console.log(animales)
// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 1)
console.log(animales)
// 4. Crea un set que almacene cinco libros
let libros = new Set(['La guia del inversor', 'Padre rico padre pobre', 'Novios 100%', 'Percy Jackson', 'El principito'])
console.log(libros)
// 5. Añade dos más. Uno de ellos repetido
libros.add('Como ganar amigos')
console.log(libros)
// 6. Elimina uno concreto a tu elección
libros.delete('El principito')
console.log(libros)
// 7. Crea un mapa que asocie el número del mes a su nombre


let mes = new Map([
    [1, 'Enero'],
    [2, 'Febrero'],
    [3, 'Marzo'],
    [4, 'Abril'],
    [5, 'Mayo'],
    [6, 'Junio'],
    [7, 'Julio'],
    [8, 'Agosto'],
    [9, 'Septiembre'],
    [10, 'Octubre'],
    [11, 'Noviembre'],
    [12, 'Diciembre'],
])
console.log(mes)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(mes.has(5) ? mes.get(5) : 'No existe el mes 5')
// 9. Añade al mapa una clave con un array que almacene los meses de verano
mes.set('meses',['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'])
let verano = []
verano.push(mes.get(1), mes.get(2), mes.get(3))
mes.set('verano', verano)
console.log(mes.get('verano'))
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let newArray = [1, 2, 3, 4, 5, 6]
console.log(newArray)
let newSet = new Set(newArray)
console.log(newSet)

let newMap = ([
    ['numeros', newSet]
])

console.log(newMap)