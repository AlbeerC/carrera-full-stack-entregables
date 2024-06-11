// Dado el siguiente arreglo: [4,7,9,3,1,45,67,23,29,78,11,16]
// Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola
// Almacenar el número más grande en una variable global y pasarlo a una función para determinar si el número es par o impar

const numArray: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16]

let largestNumber: number = numArray[0]

function findLargestNumberInArray (array: Array<number>) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largestNumber) {
            largestNumber = array[i]
        }
    }

    return (`El número mas grande del array es: ${largestNumber}`)
}

function evenOrOdd (number: number) {
    if (number % 2 === 0) {
        return (`El número ${number} es par`)
    } else {
        return (`El número ${number} es impar`)
    }
}


console.log(findLargestNumberInArray(numArray))
console.log(evenOrOdd(largestNumber))