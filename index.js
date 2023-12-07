// Crear un objeto para la calculadora
let calculadora = {
    suma: function(a, b) {
      return a + b;
    },
    resta: function(a, b) {
      return a - b;
    },
    multiplicacion: function(a, b) {
      return a * b;
    },
    division: function(a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        return 'Error: División por cero';
      }
    }
   };
   
   // Prueba de la calculadora
   console.log(calculadora.suma(5, 3)); // 8
   console.log(calculadora.resta(5, 3)); // 2
   console.log(calculadora.multiplicacion(5, 3)); // 15
   console.log(calculadora.division(5, 3)); // 1.6666666666666667
   console.log(calculadora.division(5, 0)); // Error: División por cero
   