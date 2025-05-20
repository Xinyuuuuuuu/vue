const pabellones = ["Arrupe", "Areilza", "Aztarain", "Guturbai"];


class Servicio {
    // Constructor
    constructor(servicio,pabellon,mostrar){
        this._servicio=servicio;
        this._pabellon=pabellon;
        this._mostrar=mostrar;
    }
    // Getters
    get servicio(){
        return this._servicio;
    }

    get pabellon(){
        return this._pabellon;

    }

    get mostrar(){
        return this._mostrar;
    }
    // Setters
    set servicio(value){
        this._servicio=value;
    }

    set pabellon(value){
        this._pabellon=value;
    }

    set mostrar(value){
        this.mostrar=value;
    }




    // Método mostrar
    mostrarInfo() {
        return (`${this._servicio} - ${this._pabellon} - ${this._mostrar}`);
    }
}