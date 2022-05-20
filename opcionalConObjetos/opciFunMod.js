module.exports = [
    {resta: function resta(a, b) {return a - b;}},
    {suma: function suma(a, b) {return a + b;}},
    {multiplicacion: function multiplicacion(a, b) {return a * b;}},
    {division: function division(a, b) {{if (!b){return "No se puede dividir por 0"}return a / b;}}},
    {potencia: function potencia(a, b) {return a ** b;}},// ** es potencia, eleva.
    {raizCuadrada: function raizCuadrada(a){return Math.sqrt(a);}},
    {raizCubica: function raizCubica(a) {return Math.pow(a, 1/3);}},
    {porceTotal: function porcentaje(a, b){return (a/b) * 100 + "%";}},//Numero decimales
    {porceMonto: function porcentaje (a, b){return a * (b / 100);}}, // te da un monto de un porcentaje y total dado.
];

/* porceTotalNumerosEnteros = function porcentaje2(a, b) {
    let porcertaje = (a/b) * 100;
    return Math.round(porcertaje) + "%"; //Numeros enteros.
}; */