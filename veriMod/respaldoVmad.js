const resta = require("../operaMod/resta");
const suma = require("../operaMod/suma");
const multiplicacion = require("../operaMod/multiplicacion");
const division = require("../operaMod/division");
const potencia = require("../operaMod/potencia");
const raizCuadrada = require("../operaMod/raizCuadrada");
const raizCubica = require("../operaMod/raizCubica")
const porceTotal = require("../operaMod/porceTotal")
const porceMonto = require("../operaMod/porceMonto")// todo esto llama a los modulos con operaciones.

let operador = ["-", "+", "*", "/", "**", "raizCuadrada", "raizCubica", "%", "%%"];//operaciones disponibles.
let r;
function verificador(num1, operador2, num2){
    if(operador.includes(operador2)){ //con includes busca si el operador ingresado esta dentro del array, si lo esta da true, sino false y no entra.
        if(operador2 === "-"){
            r = resta(num1, num2);
        }else if(operador2 === "+"){
            r = suma(num1, num2);
        }else if(operador2 === "*"){
            r = multiplicacion(num1, num2);
        }else if(operador2 === "/"){
            r = division(num1, num2);
        }else if(operador2 === "**"){
            r = potencia(num1, num2);
        }else if(operador2 === "raizCuadrada"){
            r = raizCuadrada(num1);
        }else if(operador2 === "raizCubica" ){
            r = raizCubica(num1);
        }else if(operador2 === "%"){
            r = porceTotal(num1, num2)
        }else if(operador2 === "%%"){
            r = porceMonto(num1, num2)
        }
    }
    if(r !== undefined){
        return r;
    }else{
        return `Ingresar bien los datos, por favor.`;//si muestra esto es por que el operador esta mal escrito.
    }
}
module.exports = verificador; //exporta la funcion del verificador madre