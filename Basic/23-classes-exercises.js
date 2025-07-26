/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class AnyClass{
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
}
// 2. Añade un método a la clase que utilice las propiedades
class AnyClass2{
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }

    print(){
        console.log(`Mi nombre es ${this.nombre}`)
    }
}
// 3. Muestra los valores de las propiedades e invoca a la función
let nombre = new AnyClass2('Moises', 'Almendares')
console.log(nombre)
nombre.print()
// 4. Añade un método estático a la primera clase
class AnyClass3{
    static printName(nombre){
        console.log(`Mi nombre es ${nombre}`)
    }

    static printApellido(apellido){
        console.log(`Mi apellido es ${apellido}`)
    }

}




// 5. Haz uso del método estático
AnyClass3.printName("Juan")
AnyClass3.printApellido("Mencias")
// 6. Crea una clase que haga uso de herencia
class HarededClass{
    constructor(){

    }
}
// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 