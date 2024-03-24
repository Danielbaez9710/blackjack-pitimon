/**
 * Función que trae el string de la carta y lo transforma en valor númerico
 * @param {string} carta 
 * @returns {number} Retorna el valor númerico de la carta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}