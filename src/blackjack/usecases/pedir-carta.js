/**
 * Esta función trae la carta a mostrar de la baraja
 * @param {Array<string>} deck 
 * @returns {string} Retorna la carta que sigue en cola
 */
export const pedirCarta = (deck) => {
    
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}