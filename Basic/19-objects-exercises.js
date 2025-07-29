/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

    console.log('Ejercicio 1')

    let newObject = {
        nombre: 'Moises',
        apellido: 'Almendares',
        edad: '24' 
    }

    console.table(newObject)
// 2. Accede y muestra su valor
    
    console.log('Ejercicio 2')

    console.log(newObject.nombre, newObject.apellido, newObject.edad)

// 3. Agrega una nueva propiedad
    console.log('Ejercicio 3')

    newObject.email = 'moises.almendares15@gmail.com'
// 4. Elimina una de las 3 primeras propiedades\
    console.log('Ejercicio 4')

    delete newObject.nombre
    delete newObject.apellido 
    delete newObject.edad

    console.log(newObject)
// 5. Agrega una función e invócala
    console.log('Ejercicio 5')
    
    newObject.camina = () =>{
        return 'Moises camina'
    }

    console.log(newObject.camina())

    
// 6. Itera las propiedades del objeto
console.log('Ejercicio 6')
newObject.nuevo = 'campo nuevo'    
for(let campo in newObject){
        console.log(`${campo}: ${newObject[campo]}`)
    }
// 7. Crea un objeto anidado
console.log('Ejercicio 7')
newObject.intObject = {
    valor: 2,
    color: 'Rojo'
}
// 8. Accede y muestra el valor de las propiedades anidadas
    console.log('Ejercicio 8')
    console.log(newObject.intObject.color)
// 9. Comprueba si los dos objetos creados son iguales
    console.log('Ejercicio 9')
    console.log(newObject.intObject.valor == newObject.intObject.color)
// 10. Comprueba si dos propiedades diferentes son iguales
    console.log('Ejercicio 10')
    console.log(newObject.intObject.valor == newObject.intObject.color)

    console.table(newObject)