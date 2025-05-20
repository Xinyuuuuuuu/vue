//array fuera de class
//const pabellones = ["Arrupe", "Areilza", "Aztarain", "Guturbai"];

//Clase Servicvios para almacenar servicio, pabellón y mostrar
export default class Servicios {
    //Array dentro de class
    static pabellones = ['Arrupe', 'Areilza', 'Aztarain', 'Guturbai'];

    constructor(servicio, pabellon, mostrar) {
        this._servicio = servicio; //texto
        this._pabellon = pabellon; //numero
        this._mostrar = mostrar; //boolean
    }

    //getters
    get servicio() {
        return this._servicio;
    }

    get pabellon() {
        return this._pabellon;
    }

    get mostrar() {
        return this._mostrar;
    }

    //setters
    set servicio(value) { //Value es el valor que se le está asignando desde fuera. 
        this._servicio = value;
    }

    set pabellon(value) {
        this._pabellon = value;
    }

    set mostrar(value) {
        this._mostrar = value;
    }

    //metodo mostrar
    mostrarInfo() {
        const nombrePabellon = Servicios.pabellones[this._pabellon];
        const visibleTexto = this._mostrar ? 'Visible' : 'No visible';
        return `Tipo; ${this._servicio} - Pabellón: ${this._pabellon}: ${nombrePabellon} - ${visibleTexto}.`;
    }

}
