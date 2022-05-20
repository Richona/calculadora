const funciones = require("./opciFunMod");
const comandos = ["a - b//Resta", "a + b//Suma", "a * b//Multiplicacion", "a / b//Division", "a ** b//Potencia",
"a raizCuadrada //Raiz cuadrada", "a raizCubica//Raiz cubica", "a % b//Con una PARTE da un porcentaje sobre un TOTAL.", 
"a %% b//Te da un monto de un TOTAL y PORCENTAJE dado."];//operaciones disponibles.
let r;
function verificador(num1, operador, num2){
    switch (operador){
        case "-":
            r = funciones[0].resta(num1, num2);
            break;
        case "+":
            r = funciones[1].suma(num1, num2);
            break;
        case "*":
            r = funciones[2].multiplicacion(num1, num2);
            break;  
        case "/":
            r = funciones[3].division(num1, num2);
            break;
        case "**":
            r = funciones[4].potencia(num1, num2);
            break;
        case "raizCuadrada":
            r = funciones[5].raizCuadrada(num1, num2);
            break;
        case "raizCubica":
            r = funciones[6].raizCubica(num1, num2);
            break;  
        case "%":
            r = funciones[7].porceTotal(num1, num2);
            break;
        case "%%":
            r = funciones[8].porceMonto(num1, num2);
            break;  
    };

    if(operador === "comandos"){
        for (let x = 0; x < comandos.length; x++) {
            console.log("~~~~~~~~~~~~");
            console.log(comandos[x]);
            console.log("~~~~~~~~~~~~");
        }
        return "Estos son los comandos, ¡disfrutalos!"
    }else if(r !== undefined){
        return r;
    }else{
        return `Ingresar bien los datos, por favor.
        Si quiere saber los distintos comandos, introduzca:
        node app ! comandos`; //si muestra esto es por que el operador esta mal escrito.
    }
}
module.exports = verificador; //exporta la funcion del verificador madre