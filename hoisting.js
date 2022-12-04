// Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.

// El código permanece igual, solo es una interpretación del motor de JavaScript. En el caso de las variables solamente sucede cuando son declaradas con var.


// Hoisting en variables declaradas con var
// Mira el siguiente código, ¿qué crees que sea el resultado del console.log?
console.log(nombre) // undefined
var nombre = "Andres"



// Hoisting en funciones
// Mira el siguiente código, ¿qué crees que sea el resultado del console.log?
console.log( saludar() )

function saludar() {
  return "Hola"
}
// La respuesta es "Hola", porque al invocar una función que no está declarada, JavaScript la eleva y por eso podemos invocar una función antes de declararla.


// Hoisting: Declara la función antes de ser invocada
function saludar() {
    return "Hola"
  }
  
  console.log( saludar() ) // "Hola"
//   Pero, lo que realmente sucede es que JavaScript guarda la función en memoria en la fase de creación de un contexto de ejecución, no asigna undefined como con las variables.

//También, el tema de hoisting ya está solucionado con las nuevas formas de declarar variables con let y const.
