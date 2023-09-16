// const lenguajes = 
let ticket = {
    from: "cai",
    to: "calarcá",
    price: 1000
}
// debugger;


console.log(ticket.from)
console.log(ticket.to)
console.log(ticket.price)


let person = {}
person.firstName = "ana"
person.lastName = "martínez"

console.log(person.firstName, person.lastName)
console.log()


console.log("-----")

let libros = [
    {titulo: "Speaking JavaScript", autor: "Axel Rauschmayer", paginas: 460},
    {titulo: "Programming JavaScript Applications", autor: "Eric Elliott", paginas: 254}, 
    {titulo: "Understanding ECMAScript 6", autor: "Nicholas C. Zakas", paginas: 352}
]
console.log(libros.length)

let libro = {titulo: "Learning JavaScript Design Patterns", autor: " Addy Osmani", paginas: 254}

libros.push(libro)

console.log(libros.length)

libros.shift()
console.log(libros.length)


let totalPaginas = libros[0].paginas + libros[1].paginas + libros[2].paginas

console.log("suma de paginas: " + totalPaginas)
console.log("suma de paginas: " + Number(libros[0].paginas + libros[1].paginas + libros[2].paginas))

let nuevoArreglo = libros.slice(-2)
console.log(nuevoArreglo[0].titulo, nuevoArreglo[1].titulo)