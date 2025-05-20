//la variable color la obtenemos ya en el script
function pintarColor (nuevoElemento, color) {
    const colorToClase = {
        amarillo: 'envases',
        verde: 'vidrio',
        azul: 'papel',
        marron: 'organico',
        naranja: 'aceite'
    };
    
    let clase = colorToClase[color];
    if (clase){
        nuevoElemento.classList.add(clase);
    }else{
        console.log('Color no encontrado');//Controlamos si error como en la muestra 
    }
}
    
