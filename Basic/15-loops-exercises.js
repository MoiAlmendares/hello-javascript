/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for(let i=1; i<=20; i++){
    console.log(i)
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0
let i = 0

while(i<=100){
    suma += i
    i++
}

console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
i = 0
suma = 0
let comprobacion
while(i <= 50){
    comprobacion = i%2==0
    if(comprobacion){
        suma += i
        i++
    }else{
        i++
    }
}

console.log(suma)
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let arrayNames = ['Juan', 'Carlos', 'Segura', 'Guerrero']

for(let i = 0; i<arrayNames.length; i++){
    console.log(arrayNames[i])
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let arrayVocales = ['a', 'e', 'i', 'o', 'u']
let palabra='hipopotomonstrosesquipedalofobia'
let counter = 0
for(let i=0; i<palabra.length; i++){
    for(let j=0; j<arrayVocales.length; j++){
        if(palabra[i] == arrayVocales[j]){
            counter++
        }
    }
}

console.log(counter)
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let arrayNumeros = [5, 8, 9]
let multiplicar = 1
for(let i = 0; i<arrayNumeros.length; i++){
    multiplicar *= arrayNumeros[i]
}

console.log(multiplicar)
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
i = 0
while(i<=9){
    console.log(5*i)
    i++
}
// 8. Usa un bucle para invertir una cadena de texto
let texto = Array.from('Hola')
let newTexto = []
console.log(texto)
for(let i =0; i < texto.length; i++){
    newTexto.unshift(texto[i])
}
newTexto = newTexto.join('')
console.log(newTexto)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let Fibonacci = [0, 1]

while(Fibonacci.length < 10){
    let ultimo = Fibonacci[Fibonacci.length - 1]
    let anterior = Fibonacci[Fibonacci.length - 2]
    let suma = ultimo + anterior
    Fibonacci.push(suma)
}

console.log(Fibonacci)
// 10. Dado un array de números, usa un bucle ara crear un nuevo array que contenga solo los números mayores a 10
arrayNumeros = [2, 4, 6, 8 , 10, 12, 14, 16, 18, 20]
let mayores = []
for(let value of arrayNumeros){
    if(value > 10){
        mayores.push(value)
    }
}
console.log(mayores)