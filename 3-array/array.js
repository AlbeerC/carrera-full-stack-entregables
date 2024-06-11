// Dado el siguiente arreglo: [4,7,9,3,1,45,67,23,29,78,11,16]
// Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola
// Almacenar el número más grande en una variable global y pasarlo a una función para determinar si el número es par o impar
var numArray = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
var largestNumber = numArray[0];
function findLargestNumberInArray(array) {
    for (var i = 1; i < array.length; i++) {
        if (array[i] > largestNumber) {
            largestNumber = array[i];
        }
    }
    return ("El n\u00FAmero mas grande del array es: ".concat(largestNumber));
}
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return ("El n\u00FAmero ".concat(number, " es par"));
    }
    else {
        return ("El n\u00FAmero ".concat(number, " es impar"));
    }
}
console.log(findLargestNumberInArray(numArray));
console.log(evenOrOdd(largestNumber));
