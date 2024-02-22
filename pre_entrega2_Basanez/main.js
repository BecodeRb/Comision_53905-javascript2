/* console.log(`BERNARDO BASANEZ PREENTREGA 1 `)

// Declaro el nombre del huesped y verifico que este registrado
do{
    usuario = prompt(`Ingrese Apellido de reserva`).toLocaleUpperCase()
    habitacion = Number(prompt ('Ingrese una habitacion numerica'))

    if(usuario == `GONZALEZ`){

        console.log(`Usuario correcto`);
    }
    
    else{
        alert(`Apellido incorrecto`);
        
    }

    if(habitacion == 280){
    
        console.log(`Habitación correcta`);
    }
    
    else{
        alert(`Habitación invalida`);
        
    }

    while (isNaN(habitacion) || habitacion == ``) {
    
    habitacion = confirm('Favor de ingresar un número de habitación valido')

}

// Presentacion usuario y habitación valida

} while ((usuario != `GONZALEZ`) || (habitacion != 280)) {
    alert(`Bienvenido ` + usuario + ` de la habitación ` + habitacion + ` \n Este es el menú de pizzas del hotel` + `\n Haga su pedido`)

    document.write(`MENÚ DEL DÍA: 🍕🍕🍕PIZZAS🍕🍕🍕`)
}


// VARIABLES DE TIPOS DE PIZZA
let pizza1 = 140;
let pizza2 = 100;
let pizza3 = 160;
let pizza4 = 150;
let pizza5 = 120;
let pizza6 = 200;


var precio;

//FUNCION QUE PERMITE SELECCIONAR LA PIZZA

function seleccionarpizza(){
    let pizza

    do {
        pizza = parseInt(prompt(`Seleccione la Pizza 🍕:
        1 -Margarita ($ 140) 
        2 -Pepperoni ($100)
        3 -4 Quesos ($160)
        4 -Jamon ($150)
        5 -Proscciuto ($ 120)
        6 -Trufa ($200)`))
    } while (( pizza > 0 && pizza > 6 ) );
    return pizza
}

eleccion = seleccionarpizza()

switch (eleccion) {
    case 1:
        precio = pizza1
        eleccion = `Margarita`
     break;
    case 2:
        precio = pizza2
        eleccion = `Pepperoni`
    break;
    case 3:
        precio = pizza3
        eleccion = `4 Quesos`
    break;
     case 4:
        precio =  pizza4
        eleccion = `Jamon`
    break;
    case 5:
        precio = pizza5
        eleccion = `Proscciuto`
     break;
    case 6:
        precio =  pizza6
        eleccion = `Trufa`
}

alert(`¡Gracias! `+ usuario + ` de la habitación ` + habitacion + `\n Su pedido es una pizza de ` + eleccion + ` y el precio es: $` + precio + ` `)

 */
//JCBL 





 


/* console.log(`BERNARDO BASANEZ PREENTREGA 1 `)

// Declaro el nombre del huesped y verifico que este registrado
do{
    usuario = prompt(`Ingrese Apellido de reserva`).toLocaleUpperCase()
    habitacion = Number(prompt ('Ingrese una habitacion numerica'))

    if(usuario == `GONZALEZ`){

        console.log(`Usuario correcto`);
    }
    
    else{
        alert(`Apellido incorrecto`);
        
    }

    if(habitacion == 280){
    
        console.log(`Habitación correcta`);
    }
    
    else{
        alert(`Habitación invalida`);
        
    }

    while (isNaN(habitacion) || habitacion == ``) {
    
    habitacion = confirm('Favor de ingresar un número de habitación valido')

}

// Presentacion usuario y habitación valida

} while ((usuario != `GONZALEZ`) || (habitacion != 280)) {
    alert(`Bienvenido ` + usuario + ` de la habitación ` + habitacion + ` \n Este es el menú de pizzas del hotel` + `\n Haga su pedido`)

    document.write(`MENÚ DEL DÍA: 🍕🍕🍕PIZZAS🍕🍕🍕`)
}


// VARIABLES DE TIPOS DE PIZZA
let pizza1 = 140;
let pizza2 = 100;
let pizza3 = 160;
let pizza4 = 150;
let pizza5 = 120;
let pizza6 = 200;


var precio;

//FUNCION QUE PERMITE SELECCIONAR LA PIZZA

function seleccionarpizza(){
    let pizza

    do {
        pizza = parseInt(prompt(`Seleccione la Pizza 🍕:
        1 -Margarita ($ 140) 
        2 -Pepperoni ($100)
        3 -4 Quesos ($160)
        4 -Jamon ($150)
        5 -Proscciuto ($ 120)
        6 -Trufa ($200)`))
    } while (( pizza > 0 && pizza > 6 ) );
    return pizza
}

eleccion = seleccionarpizza()

switch (eleccion) {
    case 1:
        precio = pizza1
        eleccion = `Margarita`
     break;
    case 2:
        precio = pizza2
        eleccion = `Pepperoni`
    break;
    case 3:
        precio = pizza3
        eleccion = `4 Quesos`
    break;
     case 4:
        precio =  pizza4
        eleccion = `Jamon`
    break;
    case 5:
        precio = pizza5
        eleccion = `Proscciuto`
     break;
    case 6:
        precio =  pizza6
        eleccion = `Trufa`
}

alert(`¡Gracias! `+ usuario + ` de la habitación ` + habitacion + `\n Su pedido es una pizza de ` + eleccion + ` y el precio es: $` + precio + ` `)

 */
//JCBL 





 


// Definición de constantes para apellido y habitación
const Apellido_Correcto = 'MESSI';
const Habitacion_Correcta = 280;

// Función principal para validar el acceso
function validarAcceso() {
    let txtUsuario, txtHabitacion;
    do {
        txtUsuario = prompt("Ingrese Apellido de reserva").trim().toUpperCase();
        txtHabitacion = parseInt(prompt("Ingrese número de habitación"), 10);

        // Validación de apellido
        if (txtUsuario !== Apellido_Correcto) {
            alert("Apellido incorrecto");
        } else {
            console.log("Usuario correcto");
        }

        // Validación de habitación
        if (isNaN(txtHabitacion) || txtHabitacion !== Habitacion_Correcta) {
            alert("Habitación inválida");
        } else {
            console.log("Habitación correcta");
        }

    } while (txtUsuario !== Apellido_Correcto || isNaN(txtHabitacion) || txtHabitacion !== Habitacion_Correcta);

    // Bienvenida al usuario
    alert(`Bienvenido ${txtUsuario} de la habitación ${txtHabitacion}.\nEste es el menú de pizzas del hotel.\nHaga su pedido`);

}

// Inventario de pizzas
const inventarioPizza = {
    1: { producto: "Margarita Clásica", tipo: "Margarita", precio: 190 },
    2: { producto: "Margarita Pesto", tipo: "Margarita", precio: 210 },
    3: { producto: "Margarita New York", tipo: "Margarita", precio: 250 },
    4: { producto: "Peperoni Clásica", tipo: "Pepperoni", precio: 210},
    5: { producto: "Peperoni Chicago", tipo: "Pepperoni", precio: 320},
    6: { producto: "Peperoni con anchoas", tipo: "Pepperoni", precio: 230},
    7: { producto: "4 Quesos Clásica",tipo: "4 Quesos", precio: 200 },
    8: { producto: "4 Quesos con Blue Cheese",tipo: "4 Quesos", precio: 220 },
    9: { producto: "Jamon Clásica",tipo: "Jamon", precio: 210},
    10: { producto: "Jamon Italiana",tipo: "Jamon", precio: 240},
};

let carrito = [];

// Función para agregar pizza al carrito
function agregarPizza() {
    const tipo = prompt("Ingrese el tipo de pizza para filtrar (Margarita, Pepperoni, 4 Quesos, Jamón) o deje en blanco para ver todas:");
    let menu = "Seleccione la Pizza 🍕:\n";

    // Filtra las pizzas por tipo si el usuario ha ingresado un filtro
    const pizzasFiltradas = tipo ? Object.values(inventarioPizza).filter(pizza => pizza.tipo.toLowerCase() === tipo.toLowerCase()) : Object.values(inventarioPizza);

    // Genera el menú en base a las pizzas filtradas
    pizzasFiltradas.forEach((pizza, index) => {
        menu += `${index + 1} - ${pizza.producto} ($${pizza.precio})\n`;
    });

    // Asegura que hay opciones disponibles después del filtro
    if (pizzasFiltradas.length === 0) {
        alert("No hay pizzas disponibles para el filtro proporcionado. Mostrando todas las opciones.");
        return filtrarYMostrarPizzas(); // Vuelve a mostrar todas las pizzas si el filtro no coincide
    }

    let pizzaSeleccionada;
    do {
        pizzaSeleccionada = parseInt(prompt(menu), 10);
    } while (isNaN(pizzaSeleccionada) || pizzaSeleccionada < 1 || pizzaSeleccionada > pizzasFiltradas.length);

    // Ajusta el índice de selección basado en el filtro aplicado
    const pizzaRealIndex = tipo ? Object.values(inventarioPizza).indexOf(pizzasFiltradas[pizzaSeleccionada - 1]) + 1 : pizzaSeleccionada;

    carrito.push(inventarioPizza[pizzaRealIndex]);
}

// Función para manejar el proceso de agregar pizzas
function manejarCarrito() {
    let preguntaAdd;
    do {
        agregarPizza();
        preguntaAdd = parseInt(prompt("¿Desea continuar agregando al carrito? 1: Sí, 2: No"), 10);
    } while (preguntaAdd === 1);

    mostrarCarrito();
}

// Función para mostrar el carrito
function mostrarCarrito() {
    document.write("Tu orden: 🍕🍕🍕PIZZAS🍕🍕🍕");
    carrito.forEach((pizza, index) => {
        document.write(`<br>${index + 1} - ${pizza.producto} ($${pizza.precio})`);
    });
}

// Iniciar validación de acceso
validarAcceso();
// Manejar proceso de carrito después de la validación
manejarCarrito();















