/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// Variables para practicar los ejercicios

// 1. Imprime por consola tu nombre si una variable toma su valor
const miNombre = "Ana";
const nombreIngresado = "Ana";

if (miNombre == nombreIngresado){
    console.log(nombreIngresado)
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
const usuario = "admin";
const contrasena = "1234";
const usuarioIngresado = "admin";
const contrasenaIngresada = "1234";

if(usuario == usuarioIngresado && contrasena == contrasenaIngresada){
    console.log(`Usuario y contrasena correctos`)
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
const numero = 0;
if (numero > 0){
    console.log(`Numero positivo`)
}else if (numero < 0) {
        console.log(`Numero negativo`)
}else{
      console.log(`El numero es 0`)  
    }
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
const edadPersona = 12;
if(edadPersona >= 18){
    console.log(`Puede votar`)
}else{
    console.log(`Le faltant ${18 - edadPersona} para poder votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad 
const edadTernaria = 20;

edadTernaria > 18 ? 'Adulto' : 'Menor'
// 6. Muestra en qué estación del año nos encontramos dependiendo del valor de una variable "mes"
const mes = "agosto";

switch(mes){
    case 'enero':
    case 'febrero':
    case 'marzo':
        console.log('Primavera');
        break;
    case 'abril':
    case 'mayo':
    case 'junio':
        console.log('Verano');
        break;
    case 'julio':
    case 'agosto':
    case 'septiembre':
        console.log('Otoño');
        break;
    case 'octubre':
    case 'noviembre':
    case 'diciembre':
        console.log('Invierno');
        break;
    default:
        console.log('Mes no válido');
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
// (usa la variable 'mes')
switch(mes){
    case 'febrero':
        console.log(`Tiene 28 dias`)
        break
    case `enero`:
    case `marzo`:
    case `mayo` :
    case `julio`:
    case `agosto`:
    case `octubre`:
    case `diciembre`:
        console.log(`31 dias`)
        break
    default: console.log(`30 dias`)
}
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
const idioma = "es";

switch(idioma){
    case "es":
        console.log("¡Hola!");
        break;
    case "en":
        console.log("Hello!");
        break;
    case "fr":
        console.log("Bonjour!");
        break;
    case "de":
        console.log("Hallo!");
        break;
    case "it":
        console.log("Ciao!");
        break;
    default:
        console.log("Idioma no soportado");
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6
// (usa la variable 'mes')

// 10. Usa un switch para hacer de nuevo el ejercicio 7
// (usa la variable 'mes')
