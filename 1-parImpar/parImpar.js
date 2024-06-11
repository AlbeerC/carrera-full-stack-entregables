"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Desarrollar un algoritmo que dado un número ingresado por el usuario determine si es impar o par y le informe al usuario. En el caso de ser 0 (cero), el algoritmo deberá informalo
var numberPrompt = readlineSync.questionInt("Ingrese un numero: ");
if (numberPrompt === 0) {
    console.log("El numero ingresado es cero");
}
else if (numberPrompt % 2 === 0) {
    console.log("El numero ingresado es par");
}
else {
    console.log("El numero ingresado es impar");
}
