"use strict";
// -Realice un programa que devuelva la potencia de un número
// -La base y el exponente deben ser ingresados por teclado
// -Sólo deben admitirse exponentes mayores o iguales a cero
// -Recuerde que el resultado de un numero elevado a 0 es 1
// -Separe la lógica de calcular la potencia utilizando métodos
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var base = readlineSync.questionInt("Ingrese la base: ");
var exponent = readlineSync.questionInt("Ingrese el exponente: ");
function calculatePowerOfaNumber(base, exponent) {
    var result = 1;
    for (var i = 0; i < exponent; i++) {
        result *= base;
    }
    if (exponent == 0) {
        result = 1;
    }
    return result;
}
if (exponent < 0) {
    console.log("El exponente ingresado no es valido");
}
else {
    console.log("El resultado es: ", calculatePowerOfaNumber(base, exponent));
}
