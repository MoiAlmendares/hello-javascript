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
class HarededClass extends AnyClass2{
    constructor(nombre, apellido, numCuenta){
        super(nombre, apellido)
        this.Id = numCuenta        
    }
}

const cuenta = new HarededClass('Moises', 'Almendares', 1234);
console.log(cuenta);     // muestra { nombre: 'Moises', apellido: 'Almendares', Id: 1234 }
cuenta.print();          // invoca el método heredado de AnyClass2
console.log(cuenta.Id);  //
// 7. Crea una clase que haga uso de getters y setters
class AnyClass4{
    #nombre
    constructor(nombre, apellido, saldo){
        this.#nombre = nombre
        this.apellido = apellido
        this.saldo = saldo
    }
    get cuantoSaldo(){
        return this.saldo
    }
}   

let newVariable = new AnyClass4('Moi', 'Almendares', 2500)
console.log(newVariable.cuantoSaldo)
// 8. Modifica la clase con getters y setters para que use propiedades privadas
class AnyClass5{
    #nombre
    constructor(nombre, apellido, saldo){
        this.#nombre = nombre
        this.apellido = apellido
        this.saldo = saldo
    }
    get cuantoSaldo(){
        return this.saldo
    }

    get nombre(){
        return this.#nombre
    }

    set newSaldo(newSaldo){
        this.saldo += newSaldo
    }

}   

let cambios = new AnyClass5('Moi', 'Almendares', 2505)
console.log(cambios.nombre)
console.log(cambios.cuantoSaldo)
cambios.newSaldo = 2495
console.log(cambios.cuantoSaldo)

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia
class AnyClass6 extends AnyClass5{
    constructor(nombre, apellido, saldo, fecha){
        super(AnyClass5)
        this.fecha = fecha

    }

    get cuantoSaldo(){
        return [this.fecha, this.saldo]
    }
}

const ultimo = new AnyClass6('Ale', 'Alme', 2000, 26072025)
console.log(ultimo.cuantoSaldo)