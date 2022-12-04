let opciones = ['Piedra', 'Papel', 'Tijera']
let jugador = parseInt(prompt(`Selecciona: 1 = Piedra, 2 = Papel, 3= Tijera`))
let maquina = 1
function jugar(jugador, maquina){
    if(Number(jugador) && jugador <= 3 && jugador > 0){
        alert(`Jugador: ${opciones[jugador]}
Maquina: ${opciones[maquina]}`)
        if(jugador == maquina){
            alert('Empate')
        }else if(jugador == 1 && maquina == 3 || jugador == 2 && maquina == 1 || jugador == 3 && maquina == 2){
            alert('Ganaste')
        }else{
            alert('Perdiste')
        }
    }else{
        alert('Seleccione no valida, seleccione una opcion con el numero 1, 2 o 3')
        jugador = parseInt(prompt(`Selecciona: 1 = Piedra, 2 = Papel, 3= Tijera`))
        jugar(jugador, maquina)
    }
}
jugar(jugador, maquina)


// let opciones = ['Piedra', 'Papel', 'Tijera']
// let jugador = parseInt(prompt(`Selecciona: 1 = Piedra, 2 = Papel, 3= Tijera`))
// let maquina = 1

// function juegoSwitch(){
//     switch(true){
//         case(Number(jugador) && jugador <= 3 && jugador > 0):
//             alert(`Jugador: ${opciones[jugador-1]}, Maquina: ${opciones[maquina-1]}`)
//             switch(true){
//                 case(jugador == maquina):
//                     alert('Empate')
//                     break
//                 case(jugador == 1 && maquina == 3 || jugador == 2 && maquina == 1 || jugador == 3 && maquina == 2):
//                     alert('Ganaste')
//                     break
//                 default:
//                     alert('Perdiste')
//                     break
//                 }
//             break
//         default:
//             alert('Seleccione no valida, seleccione una opcion con el numero 1, 2 o 3')
//             jugador = parseInt(prompt(`Selecciona: 1 = Piedra, 2 = Papel, 3= Tijera`))       
//             juegoSwitch(jugador, maquina)
//     }
// }

// juegoSwitch()