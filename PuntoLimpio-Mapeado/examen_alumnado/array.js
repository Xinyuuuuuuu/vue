// Primer metodo para crear nuevo elemneto y meterlo al princio del array
/**
 *@param {Descarga[]} arrayDescargas // Parametro 1 del arral de objetos Descarga
 *@param {Descarga} nuevaDescarga // parame6tro de elemento nuevo que se añadirá al principio del arrayDescarga
 */
function addArray (arrayDescargas, nuevaDescarga) { //Metodo=funcion
    arrayDescargas.unshift(nuevaDescarga); //UNSHIFT para al principio, PUSH para al final
    mostrarArray (arrayDescargas); //llammos a la funcion mo9strarArray y mostramos el array creado con el nuevo elemento
}

// Segundo metodo para recoger el array de objetos DEscarga y mostrarlos con el metodo de la propia clase Descarga recorriendo el array
/**
 *@param {Descarga[]} arrayDescargas // Array con obnjetos descarga
 */

function mostrarArray (arrayDescargas) {
    console.log("===Listado de descargas===");
    //Recorremos cada obbjeto de Descargas
    for (let descarga of arrayDescargas){
        console.log(descarga.mostrar()); //Mostramos cada objeto con el metodo de la clase Descarga
    }
}

/** 
 * Para probar estos 2 pasos del examen:
 * Go live el index.html < F12 < Console y ponemos lo siguiente:
 * let descargas = [];

 * let d1 = new Descarga("amarillo", "Envases", 10, "Lucía");
 * let d2 = new Descarga("verde", "Vidrio", 5, "Carlos");

 * addArray(descargas, d1);
 * addArray(descargas, d2); 
 */
