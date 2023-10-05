function parseCount(numberForParse) {
    let result = Number.parseFloat(numberForParse);
        if (isNaN(result)) {
            throw new Error("Невалидное значение")
        }
    return result;
}

function validateCount(numberForParse) {
    try {
        if(!isNaN(parseCount(numberForParse))) {
            return parseCount(numberForParse)
        }
    }
    catch (Error) {
        return Error
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }

    get perimeter() {
        return (this.a + this.b + this.c)
    }

    get area() {
        const p = this.perimeter * 0.5;
        return (Number(Math.sqrt(p * ((p - this.a) * (p - this.b)) * (p - this.c)).toFixed(3)))
    }
    
}


function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c)
    }
    
    catch (error) { 
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
   
    }
}