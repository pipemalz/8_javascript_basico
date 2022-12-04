// La **estructura switch es otra manera de evaluar condiciones, la diferencia con if es que las condiciones deben ser iguales a un caso o algo específico.

// Cómo utilizar el condicional switch
// Colocamos la palabra reservada switch y seguido de la variable o expresión a evaluar, pero sin ningún operador de comparación.
switch (expresion) {}

// Después colocamos cada caso con la palabra reservada case y el valor que deberá ser igual a la expresión. Seguido colocamos el bloque de código a ejecutar y al final la palabra reservada break para que no vuelva a evaluar otra condición si ya se cumplió.
switch (expresion) {
    case 1: {
        // Bloque 1
        break
    }
    case 2: {
        // Bloque 2
        break
    }     
}

// Finalmente, colocamos la condición por defecto con la palabra reservada default que se ejecutará si ninguno de los casos fue el correcto. Esto es semejante al bloque else.
switch (expresion) {
    case 1: {
      // Bloque 1
      break
    }
    case 2: {
     // Bloque 2
      break
    }
    default: {
      // Bloque por defecto
    }
  }

// Ejemplo utilizando switch
// Por ejemplo, creemos un semáforo.

let semaforo = 'rojo'

switch(semaforo) {
  case 'rojo':
    'Pare'
    break;
  case 'verde':
    'siga'
    break;
  case 'naranja':
    'precaucion, no siga'
    break;
  default: 
    'semaforo apagado'
  break;
}