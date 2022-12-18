function parseCount(value) {
    const parseResult = Number.parseFloat(value);
    if(isNaN(parseResult)) {
      throw new Error("Невалидное значение");
      } else {
        return parseResult;
      }       
}

function validateCount(value) {
    let result;
    try {
        result = parseCount(value);
    } catch(error) {
        return error;
    } 
    return result;
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this._perimeter = a + b + c;
        this._square = Math.sqrt((this._perimeter / 2) * (this._perimeter / 2 - a) * (this._perimeter / 2 - b) * (this._perimeter / 2 - c));
    }
    get perimeter() {    
         return this._perimeter;
        }
    get area() {
         return +this._square.toFixed(3);
        }  
}

function getTriangle(a, b, c) {
    let triangle = {
        get area() {
          return "Ошибка! Треугольник не существует";
        },
        get perimeter() {
            return "Ошибка! Треугольник не существует";
        }
    }

 // очень долго ломал голову, а оказывается геттер/сеттер можно и в самом объекте использовать
 // не только в классе. Но был ещё вот такой вариант, найденный на просторах инета:
 //
 //   Object.defineProperty(triangle, "area", {
 //       writable: false
 //     });
 //   Object.defineProperty(triangle, "perimeter", {
 //       writable: false
 //     });

    try {
        triangle = new Triangle(a, b, c);
    } catch(error) {      
        return triangle;
    }
    return triangle;
}