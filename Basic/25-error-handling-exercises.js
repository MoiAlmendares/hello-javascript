/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
console.log('Ejercicio 1')
function noNada(algo){
    if(algo == false){
        throw new Error('esta variable esta vacia')
        
    }
}
try{
    noNada("")
}catch(err){
    console.error(`No se puede ejecutar porque ${err.message}`)
}
// 2. Captura una excepción utilizando try-catch y finally
console.log('Ejercicio 2')
function noNadota(algo){
    if(algo == false){
        throw new Error('esta variable esta vacia')
        
    }
}
try{
    noNadota("")
}catch(err){
    console.error(`No se puede ejecutar porque ${err.message}`)
}finally{
    console.log('Hazlo de nuevo!')
}
// 3. Lanza una excepción genérica
function errorasoPapa(){
    throw new Error('Ta equivocado papa')
}

errorasoPapa()
// 4. Crea una excepción personalizada

// 5. Lanza una excepción personalizada

// 6. Lanza varias excepciones según una lógica definida

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10