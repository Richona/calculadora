const resta = require("../operaMod/resta");
const suma = require("../operaMod/suma");
const multiplicacion = require("../operaMod/multiplicacion");
const division = require("../operaMod/division");
const potencia = require("../operaMod/potencia");
const raizCuadrada = require("../operaMod/raizCuadrada");
const raizCubica = require("../operaMod/raizCubica")
const porceTotal = require("../operaMod/porceTotal")
const porceMonto = require("../operaMod/porceMonto")
const process = require("process");
let operador = ["-", "+", "*", "/", "**", "raiz", "raizCubica", "%", "%%"];
let num1 = +process.argv[2];
let num2 = +process.argv[4];
let r;

if(operador.includes(process.argv[3])){
    if(process.argv[3] === "-"){
        r = resta(num1, num2);
    }else if(process.argv[3] === "+"){
        r = suma(num1, num2);
    }else if(process.argv[3] === "*"){
        r = multiplicacion(num1, num2);
    }else if(process.argv[3] === "/"){
        r = division(num1, num2);
    }else if(process.argv[3] === "**"){
        r = potencia(num1, num2);
    }else if((process.argv[3] + String(process.argv[4])) === "raizcuadrada"){
        r = raizCuadrada(num1);
    }else if(process.argv[3] === "raizCubica" ){
        r = raizCubica(num1);
    }else if(process.argv[3] === "%"){
        r = porceTotal(num1, num2)
    }else if(process.argv[3] === "%%"){
        r = porceMonto(num1, num2)
    }
}

if(r !== undefined){
    console.log(r);
}else{
    console.log(`Ingresar bien los datos, por favor.`);
}