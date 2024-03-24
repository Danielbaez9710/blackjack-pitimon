import {pedirCarta} from './pedir-carta';
 
 // turno de la computadora
export const turnoComputadora = ( puntosMinimos, deck) => {
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta , puntosJugadores.length - 1);
        crearCarta(carta, puntosJugadores.length - 1);           

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    determinarGanador();
}

const determinarGanador = ()=>{
    const [puntosMinimos , puntosComputadora] = puntosJugadores;
    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana 🥲');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana 💻')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana 🧑🏻');
        } else {
            alert('Computadora Gana 💻')
        }
    }, 500);
}