import * as fs from 'node:fs'

const precios: number[] = [525, 3500, 400, 1999]
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso" ]

function arrayToString(array: any[]): string {
    let string = ""
    for (let i = 0; i < array.length; i++) {
        string += `${array[i]} `
    }
    return string
}

function stringToArray(string: string): any[] {    
    let array = string.trim().split(' ')
    return array
}

// Save data in txt files
fs.writeFileSync('./precios.txt', arrayToString(precios))
fs.writeFileSync('./productos.txt', arrayToString(productos))

// Recover data from txt files
const recoverPriceData: string = fs.readFileSync('./precios.txt', 'utf8')
const recoverProductData: string = fs.readFileSync('./productos.txt', 'utf8')

// Show data in console
console.log(stringToArray(recoverPriceData))
console.log(stringToArray(recoverProductData))