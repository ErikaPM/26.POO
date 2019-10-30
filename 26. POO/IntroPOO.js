//Programación orientada a objetos permite crear y utilizar clases estandar para después personalizarlas,
//según las necesidades del programador


// class Autos {
//     constructor(marca, modelo, cilindraje, color) {
//         this.marca = marca
//         this.modelo = modelo
//         this.cilindraje = cilindraje
//         this.color = color
//     }
//     presentacion() {
//         return `Mi auto de los sueños es de marca ${this.marca}, modelo ${this.modelo}, un cilindraje
//         óptimo de ${this.cilindraje} y color ${this.color}`
//     }
// }

// let autoLujoso = new Autos('Maserati', '2020', '5000cc', 'Rojo')
// console.log(autoLujoso.presentacion())


// //Herencia 
// //Usar los atributos de una clase creada, para alimentar y complementar los atibutos de otra clase a crear.

// class autosUsados extends Autos {
//     constructor(marca, modelo, cilindraje, color, kilometraje, antiguedad, precio) {
//         super(marca, modelo, cilindraje, color)
//         this.kilometraje = kilometraje
//         this.antiguedad = antiguedad
//         this.precio = precio
//     }
//     presentacion() {
//         return `${super.presentacion()}, pero aún no me pagan y por esa razón me conformo con un carro usado de minimo
//         ${this.kilometraje} kilometraje, de máximo ${this.antiguedad} y un precio ideal de ${this.precio}`
//     }
// }

// let pichirilo = new autosUsados('Renault', '2010', '1600', 'Negro', 10000, 9, 15000000)
// console.log(pichirilo.presentacion())

//EJERCICIO DE REPASO NO OBLIGATORIO - viernes
//1)Crear un objeto Casa que tenga las siguientes características; tamaño (metros cuadrados), valor, nventanas y nhabitantes.
//2)Crear un nuevo objeto que herede las características del primero objeto y permita incluir lo siguiente:
//dueño, piso.



class Casa {
    constructor(tamano, valor, nVentanas, nHabitantes) {
        this.tamano = tamano,
            this.valor = valor,
            this.nVentanas = nVentanas,
            this.nHabitantes = nHabitantes
    }
    imprimir() {
        return `La casa de mi abuelo tiene un tamaño de ${this.tamano}, un valor de ${this.valor}, ${this.nVentanas} ventanas y 
    viven ${this.nHabitantes} personas en ella.`
    }
}

let casaAbuelo = new Casa("300 mts cuadrados", "$ 1.200.000.000", 8, 6)

console.log(casaAbuelo.imprimir())

class Habitacion extends Casa {
    constructor(tamano, valor, nVentanas, nHabitantes, propietario, piso) {
        super(tamano, valor, nVentanas, nHabitantes)
        this.propietario = propietario,
            this.piso = piso
    }
    imprimir() {
        return `La casa tiene una habitación para arrendar, de un tamaño de ${this.tamano}, un valor de canon de ${this.valor}, con ${this.nVentanas}
    que actualmente tiene ${this.nHabitantes} habitante, llamado ${this.propietario} y se encuentra ubicada en el piso ${this.piso}.`
    }
}

let habitacionArrendar = new Habitacion("70 mts cuadrados", "$ 1.000.000", 2, 1, "Camilo Muñoz", 3)

console.log(habitacionArrendar.imprimir())