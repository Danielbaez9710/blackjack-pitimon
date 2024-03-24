import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<string>} tiposDeCarta  ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales ejemplo:  ['A','J','Q','K']
 * @returns {Array<string>} retorna un nuevo deck mezclado
 */
export const crearDeck = (tiposDeCarta , tiposEspeciales) => {
    if(!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('TiposCarta es obligatorio');
    if(!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('TiposEspeciales es obligatorio');
    
    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    return _.shuffle( deck );
}

// export default crearDeck;