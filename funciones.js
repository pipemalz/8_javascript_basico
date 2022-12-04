// Cuando hablamos de funciones en JavaScript, tenemos dos tipos de funciones: Funciones Declarativas (function declaration / function statement) y Expresiones de función (function expression / funciones anónimas).

// Funciones Declarativas:
// En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:

function miFuncion(a,b){
    return a + b
}

miFuncion(2,4) // 2 + 4 = 6



//Funcion de Expresion / funciones anonimas
// Expresión de función:
// En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.

var miFuncion2 = function(nombre, apellido){
    return nombre + ' ' + apellido
}

miFuncion2('felipe', 'moreno')

// En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.



// Diferencias:
// A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

// Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.