/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
const texto1 = "Hola";
const texto2 = "Mundo";
const concat = texto1 + texto2
console.log(concat)

// 2. Muestra la longitud de una cadena de texto
const texto3 = "Programación en JavaScript";
const longitud = console.log(texto3.length)
// 3. Muestra el primer y último carácter de un string
const texto4 = "Ejercicio";
const values = texto4[0] + texto4[7]
console.log(values)
// 4. Convierte a mayúsculas y minúsculas un string
const texto5 = "JavaScript Es Genial";
console.log(texto5.toUpperCase())
console.log(texto5.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
const texto6 = `Esta es la primera línea.
Esta es la segunda línea.
Y esta es la tercera línea.`;

// 6. Interpola el valor de una variable en un string
const nombre = "Ana";
const edad = 25;
console.log(`Tu nombre es ${nombre} y tienes ${edad} años`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
const texto7 = "Este es un texto con espacios";
console.log(texto7.replace(/ /g, '-'))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
const texto8 = "Aprender JavaScript es divertido";
const palabra = "JavaScript";
console.log(texto8.includes(palabra))

// 9. Comprueba si dos strings son iguales
const texto9a = "Comparar";
const texto9b = "Comparar";
console.log(texto9a.includes(texto9b) && texto9b.includes(texto9a))

// 10. Comprueba si dos strings tienen la misma longitud
const texto10a = "Hola";
const texto10b = "Adiós";
console.log(texto10a.length == texto10b.length)
