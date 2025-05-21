// 1. Clase para almacenar aciertos
class PremioPelicula {
    constructor(pelicula, premio) {
        this._pelicula = pelicula;
        this._premio = premio;
    }
    // getters 
    get pelicula() { return this._pelicula; }
    get premio() { return this._premio; }
   
    //setters
    set pelicula(v) { this._pelicula = v; }
    set premio(v) { this._premio = v; }

    // toString personalizado
    toString() {
        return `La película "${this.pelicula}" ha ganado el premio ${this.premio}`;
    }
}

// 2. Array de datos de juego y resultado
const peliculas = [
    'As bestas',
    'Alcarràs',
    'Cinco lobitos',
    'Modelos 24 horas',
    '20.000 especies de abejas',
    'Society of the Snow',
    'Mientras dure la guerra'
];

const premios = [
    'Mejor película',
    'Mejor dirección',
    'Mejor dirección novel',
    'Mejor actor protagonista',
    'Mejor actriz protagonista',
    'Mejor actor de reparto',
    'Mejor actriz de reparto'
];

// Array donde guardaremos los objetos de aciertos
const premiosPeliculas = [];

// 3. Referencias al DOM
const inputPeli = document.getElementById('pelicula');
const selectPremio = document.getElementById('premio');
const btnComprobar = document.getElementById('comprobar');
const contMensaje = document.getElementById('mensaje');

// 4. Variables de estado
let idxSeleccionada;
let intentosRestantes = 3;

// 5. Cargar película aleatoria
function cargarPeliculaAleatoria() {
    idxSeleccionada = Math.floor(Math.random() * peliculas.length);
    inputPeli.value = peliculas[idxSeleccionada];
}

// 6. Comprobar al hacer click
function comprobarPremio() {
    const idxPremio = selectPremio.selectedIndex; // selectedIndex es una propiedad de la <select>
    // ¿Coindice posición?
    if (idxPremio === idxSeleccionada) {
        // acierto: creamos objeto, lo añadimos y mostramos mensaje
        const acierto = new PremioPelicula(
            peliculas[idxSeleccionada],
            premios[idxPremio]
        );
        premiosPeliculas.push(acierto);
        contMensaje.textContent = acierto.toString();
        btnComprobar.disabled = true;
    } else {
        // fallo: decrementamos intentos
        intentosRestantes--;
        if (intentosRestantes > 0) {
            contMensaje.textContent =
                `Incorrecto, inténtalo de nuevo. Tienes ${intentosRestantes} intento` +
                (intentosRestantes > 1 ? 's' : '');
            selectPremio.focus();
        } else {
            // se han agotado los intentos
            contMensaje.textContent = 'FIN DEL JUEGO';
            btnComprobar.disabled = true;
        }
    }
}

// 7. Enlazar eventos
window.addEventListener('load', cargarPeliculaAleatoria);
btnComprobar.addEventListener('click', comprobarPremio);
