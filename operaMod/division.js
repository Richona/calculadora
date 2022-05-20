function division(a, b) {
    if (!b){
        return "No se puede dividir por 0"
    }
    return a / b;
};

module.exports = division;//exporla la funcion.