console.log("hola mundo")

//let firstName = 'Marlon'
//const lastName = 4

//Primitivos: se dice que son inmutables,
//Objetos: que en JS se maneja la mayoria por objetos se dice que estos son mutables, es decir:


//el string no se puede mutar, es un metodo primitivo. siempre devolvera un string nuevo por lo que nunca se podra modificar.
const firstName ='Marlon' 
firstName.toUpperCase()
console.log(firstName)


//aqui lo que hemos hecho es modificar el string pero guardando el resultado modificado en un nueva variable, asi la anterior queda igual y tenemos el resultado modificado pero guardado en una nueva variable distinta a la primera.
const zfirstName ='macenco'
const zfirstNameWithUpperCase = zfirstName.toUpperCase() 
console.log(zfirstNameWithUpperCase)

//aqui hemos creado un array (funciona similar para objetos, funciones etc), y a este le hemos metido un dato '1', por que se puede decir que este elemento de array si que ah mutado, ah pasado de cero valores a tener un valor y este que sea igual a 1.
const  list = [] //Constante significa que no se puede reasignar la variable, no que no se pueda cambiar el valor.
list.push(157)
console.log(list)
console.log(list[0]) //para acceder al elemnto de un array, que en este caso se comienza por el lemnto cero 0, depues 1 que este vendria a ser el segundo elemnto y depues el 2 que seria el tercero y asi sucecivamente.

//para no mutar un array se utiliza CONCAT, que lo que hace es un introducir un valor al array (el que queramos), pero la lista del array nos la muestra en una lista nueva, asi no mutamos o modificamos el array original.
const  listTwo = []
const anotherList = listTwo.concat(325)
console.log(anotherList)

//Objetos, (son estructuras de datos)
const persona = {                   //con esto lo que hacemos es asignarle a la variable 'persona' difs valores, tenemos una llave y un valor. la llave es por ejemplo 'name' y su valor es 'Marlon' 
    name: 'Marlon',
    twitter: '@krieguer',
    age: 18,
    isDeveloper: true,
    links: ['http://www.google.com', 'https://www.youtube.com']
}

console.log(persona.name)           //para que nos muestre el valor de la llave 'name' del objeto.
console.log(persona.links[1])       //aqui accedemos a la llave 'links' y le decimos que nos muestre el segundo valor de ese array. osea el segundo link.

const field = 'twitter'         //cuando tengo el nombre de la propiedad en este caso 'twitter', guardada en un constante.
console.log(persona[field])     //forma dinamica de acceder al la llave 'twitter' a travez de la variable 'field'. se utiliza los corchetes [].
console.log(persona.twitter)    //acceder de esta forma significa saber el nombre de la propiedad.
// minuto 30 del video completado

//-----------------------------------------------------------------------------------------------------

//FUNCIONES
const sumar = (sumando1, sumando2) => {             //esto es una "Array Funtion", que es que a una constante se le asigna un funcion. si no tendriamos que declarar las variables y aparte crear la funcion.
    console.log(`primer numero = ${sumando1}`)
    console.log(`segundo numero = ${sumando2}`)
    return sumando1 + sumando2
}

const resultado = sumar(2, 4)
console.log(`el resultado de la suma es = ${resultado}`)

console.log(`el resultado de la suma es ${sumar(2, 7)}`)       // se puede ejecutar el comando con un console.log para que nos devuelva el resultado o crear un variable con nombre resultado y ahi ejecutar la function, en ese caso hariamos console.log a la variable resultado

//tambien se puede ejecutar con variables.
const sum1 = 8
const sum2 = 10

console.log(`resultado = ${sumar(sum1, sum2)}`)


//forma tradicional de expresar la varables, aun que hay que escribir mas lineas de codigo

function restar(num1, num2) {
    console.log(num1)
    console.log(num2)
    return num1 - num2
}

const residuo = restar(10,5)
console.log(`es resultado es igual a ${residuo}`)
// minuto 55 finalizado.

// ----------------------------------------------------------------------------------

