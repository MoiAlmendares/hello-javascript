/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
console.log("Ejercicio 1")

const kitchenItems = [
  "cuchillo",
  "tabla de picar",
  "sartén",
  "olla",
  "espátula",
  "taza medidora",
  "batidora",
  "colador",
  "pelador",
  "abrelatas",
  "rallador",
  "cucharón",
  "tenedor",
  "plato hondo",
  "vaso térmico"
];

let [fstItem, scndItem] = kitchenItems
let someKitchenItems = [fstItem, scndItem]
console.log(someKitchenItems)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
console.log("Ejercicio 2")
let [fstItem1, scndItem1, , , , , , , , , , , , , , , , , , nonItem = " No hay item"] = kitchenItems
console.log(nonItem)
// 3. Usa desestructuración para extraer dos propiedades de un objeto
console.log("Ejercicio 3")
const kitchen = {
  utensilios: ["cuchillo", "tenedor", "cuchara"],
  electrodomesticos: {
    horno: "eléctrico",
    licuadora: "500W",
    microondas: "Samsung"
  },
  estantes: 4,
  tieneRefrigerador: true,
  despensa: {
    arroz: "2kg",
    frijoles: "1kg",
    pasta: "500g"
  }
};

let {utensilios, estantes} = kitchen
console.log(utensilios) 
console.log(estantes) 

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
console.log("Ejercicio 4")
let {utensilios: utensilios1, estantes: estantes1} = kitchen
console.log(utensilios1[0])
console.log(estantes1 + 5) 
// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
console.log("Ejercicio 5")
let {despensa: {arroz: arrozDespensa}} = kitchen
console.log(arrozDespensa)
// 6. Usa propagación para combinar dos arrays en uno nuevo
console.log("Ejercicio 6")
const ingredientesBase = ["harina", "agua", "sal"];
const ingredientesExtra = ["queso", "tomate"];

let receta = [...ingredientesBase, ...ingredientesExtra]
console.log(receta)
// 7. Usa propagación para crear una copia de un array
console.log("Ejercicio 7")

let copyIngredientesBase = [...ingredientesBase]
// 8. Usa propagación para combinar dos objetos en uno nuevo
console.log("Ejercicio 8")

utensilios = {
  cuchillo: "acero",
  espatula: "silicona",
  rallador: "inoxidable"
};

const electrodomesticos = {
  licuadora: "500W",
  microondas: "Samsung",
  horno: "eléctrico"
};

let cocinaCompleta = {...utensilios, ...electrodomesticos}
console.log(cocinaCompleta)



// 9. Usa propagación para crear una copia de un objeto
console.log("Ejercicio 9")
let nuevoObjeto = {
    ...electrodomesticos
}

console.log(nuevoObjeto)
// 10. Combina desestructuración y propagación
console.log("Ejercicio 10")
const ingredientes = ["aceite", "cebolla", "ajo", "tomate", "sal", "pimienta"];

let [stStep, ndStep, rdStep, ...codimentos] = ingredientes

console.log(stStep)
console.log(ndStep)
console.log(rdStep)
console.log(codimentos)