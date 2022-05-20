const verificador = require("../veriMod/veriMadre")//llama a la carpeta de verificaciones.
const verificadorOpci = require("../opcionalConObjetos/opciVeriObj")//llama a la carpeta de verificaciones opcional con objetos
const process = require("process"); // llama a process para requerir datos por consola.

let num1 = +process.argv[2];
let operador = process.argv[3]//PARA VER LOS DISTINTOS OPERADORES INGRESA POR CONSOLA: node app ! comandos
let num2 = +process.argv[4];

console.log(verificadorOpci(num1, operador, num2));