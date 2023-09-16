const {suma, resta, multiplicacion, division, perimetroCirculo, areaTriangulo, modulo, parImpar, porcentaje, esPositivo} = require('../suma')

describe('operaciones matemáticas', ()=> {
    
    test('sumar 1 + 2 es igual a 3', ()=> {
        expect(suma(1, 2)).toEqual(3)
    })
    
    test('restar 1 - 2 es igual a -1', ()=> {
        expect(resta(1, 2)).toBe(-1)
    })
    
    test('multiplicar 50 * 10 es igual a 500', ()=> {
        expect(multiplicacion(50, 10)).toBe(500)
    })
    
    test('dividir 10 / 0 es igual a Infinity', ()=> {
        expect(division(10, 0)).toBe(Infinity)
    })
    
    test('perimetro circulo: multiplicar 3.14 * 5 es igual a 15.7', ()=> {
        expect(perimetroCirculo(5)).toBeCloseTo(15.7, 1)
    })
    
    test('area triangulo: multiplicar 10 * 3 / 2 es igual a 15', ()=> {
        expect(areaTriangulo(10, 3)).toBe(15)
    })
    
    test('modulo de 10 es igual a 0', ()=> {
        expect(modulo(10, 2)).toBe(0)
    })
    
    test('par o impar: 6 es igual a par', ()=> {
        expect(parImpar(6)).toBe("par")
    })
    
    test('porcentaje: 10% de 100.000 es igual a 10.000', ()=> {
        expect(porcentaje(100000, 10)).toBe(10000)
    })
    
    test('es positivo: -10 es un número positivo, igual a false', ()=> {
        expect(esPositivo(-10)).toBe(false)
    })
})




// expect: lo que se recibió y toBe: lo que se espera, para probar que dos valores son exactamente idénticos

// para ejecutar: npm test