"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("node:fs");
var precios = [525, 3500, 400, 1999];
var productos = ["Leche", "Galletitas", "Harina", "Queso"];
function arrayToString(array) {
    var string = "";
    for (var i = 0; i < array.length; i++) {
        string += "".concat(array[i]);
    }
    return string;
}
function stringToArray(string) {
    var array = string.trim().split(' ');
    return array;
}
// Save data in txt files
fs.writeFileSync('./precios.txt', arrayToString(precios));
fs.writeFileSync('./productos.txt', arrayToString(productos));
// Recover data from txt files
var recoverPriceData = fs.readFileSync('./precios.txt', 'utf8');
var recoverProductData = fs.readFileSync('./productos.txt', 'utf8');
// Show data in console
console.log(stringToArray(recoverPriceData));
console.log(stringToArray(recoverProductData));
