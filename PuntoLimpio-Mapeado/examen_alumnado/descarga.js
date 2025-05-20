class Descarga { //Descarga es el obejeto creado a partir de una clase
    constructor(color, residuo, kg, nombre) {
        this._color = color;//_color es la propiedad interna y color es el dato que nos trae el getter
        this._residuo = residuo;
        this._kg = kg;
        this._nombre = nombre;
    }

    //Getters
    get color (){
        return this._color;
    }

    get residuo (){
        return this._residuo;
    }
    
    get kg (){
        return this._kg;
    }

    get nombre (){
        return this._nombre;
    }

    //Setters
    set color (value){//Value es el valor que se le está asignando desde fuera. 
        this._color=value;
    }   

    set residuo (value){
        this._residuo=value;
    }

    set kg (value){
        this._kg=value;
    }

    set nombre (value){
        this._nombre=value
    }

    //Metodo mostrar 
    mostrar(){
        return `${this._nombre} ha depositado ${this._kg} kg del residuo ${this._residuo} en  el contenedor ${this._color}.`;
    }
}