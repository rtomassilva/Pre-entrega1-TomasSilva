// Solicitar los datos al usuario
let total = 0;
let producto;
let i = 1;
let numeroDeProductos = 3; // Número de productos

while (i <= numeroDeProductos) {
    producto = parseFloat(prompt("Ingrese el importe del producto #" + i));
    total += producto;
    i++;
}

let cupon = prompt("Ingrese el código del cupón");

// Datos del sistema
const montoMaximo1 = 100000;
const montoMaximo2 = 250000;
const cuponValido = "CUPON";
const descuentoMaximo1 = 10;
const descuentoMaximo2 = 25;
const descuentoCupon = 10; // Descuento adicional del cupón en porcentaje

console.log("Total sin descuento: $" + total);

// Aplicar descuentos según el total
if (total > montoMaximo1 && total <= montoMaximo2) {
    let descuentoAplicado = ((total * descuentoMaximo1) / 100);
    total -= descuentoAplicado;
    console.log("Descuento de " + descuentoMaximo1 + "% aplicado: $" + descuentoAplicado);
} else if (total > montoMaximo2) {
    let descuentoAplicado = ((total * descuentoMaximo2) / 100);
    total -= descuentoAplicado;
    console.log("Descuento de " + descuentoMaximo2 + "% aplicado: $" + descuentoAplicado);
}

// Aplicar descuento adicional por cupón
if (cupon === cuponValido) {
    let descuentoPorCupon = (total * descuentoCupon) / 100;
    total -= descuentoPorCupon;
    console.log("Descuento adicional por cupón aplicado: $" + descuentoPorCupon);
}

// Función para calcular las cuotas
function calcularCuotas(total) {
    let cuotas = parseInt(prompt("¿En cuántas cuotas desea pagar?"));
    if (cuotas > 0) {
        let cuota = total / cuotas;
        alert("El total a pagar es: $" + total + "\nTotal a pagar en " + cuotas + " cuotas de: $" + cuota.toFixed(2) + " cada una.");
    }else {
        alert("El total a pagar es: $" + total);
    }
}

calcularCuotas(total);