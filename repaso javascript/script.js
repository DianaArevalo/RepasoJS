// tipos de dato

// // booleano
// let a = true
// let b = false

// // undefined
// let c // no se asigna valor

// //null
// let d = null

// // object

// // let objeto = {
// //     clave: valor
// // }

// // array }
// let array = [1, 2, 3, 4, 5, 6]
// let array2 = ['html', 'css', 'javascript']

//date

// const date = new Date("07-09-2023")

// console.log(date);

// const a = 5
// const b = 9

// function suma(x, y) {
//     return x + y
// }

// const respuesta = suma(a, b)

// console.log(`la respuesta de ${a} + ${b} es igual a:`, respuesta);


// const temperatura = 76

// function transformaraCelsius(fahrenheit) {
//     return (fahrenheit - 32) * (5 / 9)
// }

// const res = transformaraCelsius(temperatura)
// console.log(`la temperatura en grados Celsius es de `, parseInt(res));

// function mostrar() {
//     document.getElementById('seleccionable').innerHTML = Date()
// }

//strings

//arrays

// const array = new Array(3)

// array[0] = 'Curso de html'
// array[1] = [1, 2, 3, 4, 5]
// array[2] = { nombre: 'carolina' }

// document.getElementById('seleccionable').innerHTML = array

// const array = ['Despertarse', '20/20/2', 'comer', 'aseo', 'baño', 'almuerzo', 'estudiar', 'trabajo', 'proyectos', 'dormir']

// let agenda = ''
// for (let index = 0; index < array.length; index++) {
//     agenda += "<li>" + array[index] + "</li>"
// }

// document.getElementById('seleccionable').innerHTML = agenda


// const fecha = new Date()
// fecha.setFullYear(2029)
// fecha.setMonth(9)
// fecha.setDate(19)

// let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

// let mes = fecha.getMonth() + 1

// let resultado = fecha.getDay() + ' ' + mes + ' ' + fecha.getFullYear()

// console.log(resultado);

//short 03/15/2023
//long Mar 25 2023


//OBJETO MATH

// Math.E            // devuelve el numero de eulewr
// Math.PI           // devuelve PI
// Math.SQRT2        // deviuelve la raiz cuadrada de 2
// Math.SQRT1_2      // devuelve la raiz cuadrada de 1/2
// Math.LN2          // devuelve el logritmo natural de 2
// Math.LN10         // devuelve el logaritmo natural de 10
// Math.LOG2E        // devuelve el logaritmo de E en base 2
// Math.LOG10E       // devuelve el logaritmo de E en base 10

// set es unico e irrepetible


// let conjunto = new Set(['Pedro', 'Ricardo', 'Maria', 'Maria', 'MARIA'])


// //agregar

// conjunto.add('Luciana')

// //borrar

// conjunto.delete('Pedro')


// // pregunta

// let pregunta = conjunto.size

// console.log(pregunta);

//vamos a comprar muebles pero que nose vayan dobles

// let array = ['cama', 'mesa', 'armario', 'silla', 'escritorio', 'tocador', 'cama', 'tocador']

// function comprar(muebles) {
//     console.log(muebles);
// }

// function comprarUnaUnidad(muebles) {
//     let unicaUnidad = new Set(muebles)
//     console.log(unicaUnidad);
// }

// comprarUnaUnidad(array)




//MAP indagar mas a fondo por que casi no entendi

// let mapa = new Map([
//     ['Computadoras', 10],
//     ['Tablets', 5],
//     ['Celulares', 15]
// ])

// mapa.set('Teclados', 20)

// console.log(mapa);

//convertir a un array utilizando set

// let array = [1, 1, 1, 22, 2, 2, 2, 2, 2, 3, 4, 5, 65]
// let unico = new Set(array)
// let newArray = [...unico]

// console.log(newArray);

//STRING A NUMBRE


// //parseint, parseFloat, Number
// let a = Number('1')



// //NUMBERS A STRING
// let b = String(1)
// let c = 1
// let d = c.toString()

// //DATES A NUMBER
// let e = new Date()
// let f = Number(e)

// //DATES A STRING
// let g = String(f)

// //NUMBER A BOOLEAN
// let h = Boolean(0);
// let i = Boolean(1)

// console.log(h);
// console.log(typeof h);

//REGEX Expresiones <Regulares

// // /pattern/modificadores
// let texto = 'practica de js carolina'
// let busqueda = texto.search(/Carolina/i)

// console.log(busqueda);

//modificadores 
//i: ignorar mayusculas
//g: buscar en todo texto pasado
//m: busqueda multilinea
//s: permite usar .

// let pattern = /\d/
// let resultado = pattern.test(texto)

// console.log(resultado);

//patron para correo electronico

// let pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

// console.log(pattern.test('jinnethalexandra234@gmail.com'));

//PROMESAS ejecuta tareas asincronas

// let promesa = new Promise((response, reject) => {
//     setTimeout(() => {
//         let resp = {
//             response: 200,
//             description: 'esta info es importante'
//         }
//         response(resp)
//         reject('fallo')
//     }, 3000)
// })


// promesa.then(res => {
//     console.log(res.description);
// }).catch(error => {
//     console.error(error);
// })

// SECUENCIALIDAD DE PROMESAS, CASI NO SE USA ES PERDICION PARA ESO ES EL ASYNC AWAIT

// ASYNC AWAIT


// let promesa1 = new Promise((response, reject) => {
//     setTimeout(() => {
//         let resp = {
//             response: 200,
//             description: 'esta info es importante'
//         }
//         response(resp)
//         reject('fallo')
//     }, 2500)
// })


// let promesa2 = new Promise((response, reject) => {
//     setTimeout(() => {
//         let resp = {
//             response: 200,
//             description: 'esta info es importante pero suele demorar mucho'
//         }
//         response(resp)
//         reject('fallo')
//     }, 5000)
// })


// let promesa3 = new Promise((response, reject) => {
//     setTimeout(() => {
//         let resp = {
//             response: 200,
//             description: 'esta info es importante '
//         }
//         response(resp)
//         reject('fallo')
//     }, 7500)
// })


// async function ejecutarPromesas() {
//     let respuesta1 = await promesa1
//     console.log(respuesta1);
//     let respuesta2 = await promesa2
//     console.log(respuesta2);
//     let respuesta3 = await promesa3
//     console.log(respuesta3);

// }
// ejecutarPromesas()


// apis mas dinamicas
let urlBase = 'https://jsonplaceholder.typicode.com'


//GET
//let query = 'post/1'

// fetch(`${urlBase}/${query}`)
//     .then(response => response.json())
//     .then(json => console.log(json))


// let requestBody = {
//     title: 'Hola soy yo',
//     body: '¡que bella¡',
//     userId: 1
// }

//POST: Enviar informcaion
// fetch(`${urlBase}/posts`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'aplication/json; charset=UTF-8'
//     },
//     body: JSON.stringify(requestBody)
// })
//     .then(response => response.json())
//     .then(json => console.log(json))
//PUT: editar informacion
// let posteo = 5


// let requestBody2 = {
//     id: 3,
//     title: 'Hola soy yo',
//     body: '¡que bella¡',
//     userId: 5,
// }

// fetch(`${urlBase}/posts/${posteo}`, {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'aplication/json; charset=UTF-8'
//     },
//     body: JSON.stringify(requestBody2)
// })
//     .then(response => response.json())
//     .then(json => console.log(json))


//PATCH: editar informacion (solo se edita un atributo)


// let post = 10
// let modificacion = {
//     title: 'este titulo ha sido modificado'
// }

// fetch(`${urlBase}/posts/${post}`, {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'aplication/json; charset=UTF-8'
//     },
//     body: JSON.stringify(modificacion)
// })
//     .then(response => response.json())
//     .then(json => console.log(json))



//DELETE: borrar un item

// let elementoBorrar = 7

// fetch(`${urlBase}/posts/${elementoBorrar}`, {
//     method: 'DELETE',
// })


//pendientes

// DOM
// FORMS
// NAVEGACION
// NODOS
// CLOUSURES
// ECMAS
// BROWSER
// OBJETO Window
// OBJETO alert
// Location
// HISTOTY
// AJAX pedido de datos
// GRAFICOS  3D