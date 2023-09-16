function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b
}

function division(a, b) {
    console.log("division " + 10/0);
    return a / b
}

function perimetroCirculo(a) {
    return 3.14 * a
}

function areaTriangulo(a, b) {
    return (a * b) / 2
}

function modulo(a, b) {
    return a % b
}

function parImpar(n) {
    if (n % 2 === 0) {
        return "par"
    } else {
        return "impar"
    }
}

function porcentaje(precio, porcentaje) {
    return precio * porcentaje / 100
}

function esPositivo(n) {
    if (n > 0) {
        return true
    } else {
        return false
    }
}


module.exports = {
    suma, resta, multiplicacion, division, perimetroCirculo, areaTriangulo, modulo, parImpar, porcentaje, esPositivo
}
