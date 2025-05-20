//En este caso hay que usar esta linea de codigo para que el script solo se ejecute cuando todo el DOM está cargado.
//Al estar script.js en el head del index se carga antes del DOM
window.addEventListener("DOMContentLoaded", function () {
   
    let arrayDescargas = [];

    /*
    4.Función actualiza los kg del input correspondiente según el residuo del objeto.0

    Dentro de "DOMContentLoaded" SÍ importa el orden en la definamos la función.
    En este caso se leera de arriba hacia abajo. Y nos interesa que esté dentro por que actializarKg depende del DOM.
    Si solo hacemos funciones declaradas no importaría el orden.
    */

    function actualizarKg (descarga) {
        //Mapeamos .text de las <option> con el Id del campo que no es editable (disabled)
        const residuoToId = {
            "Envases": "envases",
            "Vidrio": "vidrio",
            "Papel": "papel",
            "Aceite": "aceite",
            "Organico": "organico"
        }
        
        //Obtenemos el tipo de residuo del objeto creado (descarga)
        let residuo=descarga.residuo; //Devuelve "Vidrio"
        //Con el tipo de residuo obtenemos el Id del imput usando el mapa. 
        //Ya que en el input el id es en minusculas, con el mapeado lo convertimos.
        let IdCampo=residuoToId[residuo];//[] porque residuo es variable y no fijo. Cambia a "vidrio"
        //Con el id podemos acceder al imput del DOM para cambiar el .value
        let input = document.getElementById(IdCampo);

        //Obtenemos el valor actual del input disabled y sumamos los kg del objeto (descargas)
        let kgActual = parseFloat(input.value); // Convertir a número
        let kgNuevo= kgActual + parseFloat(descarga.kg);

        //Actualizar el input con el nuevo valor
        input.value = kgNuevo;
    }

    //Asociar el evento 2 al boton
    document.getElementById("anadir").addEventListener("click", function(e){
        e.preventDefault(); // Evitar que el formulario se envíe y recargue la página
        
        if (!validarFormulario()) {
            return; // Si la validación falla, no se añade la descarga
        }
        
        //1- Obtenermos los datos del formulario


        //METODO PARA OBTENER DATOS DE LAS OPCIONES DE UNA LISTA
        //Obtenermos el <select> completo ya que de ahi es donde obtendremos toda la info
        let elementoSelect = document.getElementById("residuo");

        //Obtenermos la <option> gracias a la info de la select
        let opcionSeleccionada= elementoSelect.options[elementoSelect.selectedIndex]//.selectedIndex da la posición del <option> elegido (por ejemplo, 0 para el primero).

        //Obtenemos el color y el residuo apartir de la opcion obtenida
        let color = opcionSeleccionada.value;
        let residuo = opcionSeleccionada.text;

        //Obtenermos kg y nombre desde los imputs
        let kg = document.getElementById("kg").value.trim();
        let nombre=document.getElementById("nombre").value.trim();

        //2- Crear nuevo objeto de tipo DEscarga
        let nuevaDescarga = new Descarga(color, residuo, kg, nombre);

        //Verificamos de momento por consola
        console.log("objeto creado:", nuevaDescarga);
        console.log("mensaje:",nuevaDescarga.mostrar());

        //3- En el apartado 3. Crear párrafo con el mensaje

        //Div DONDE va el parrafo nuevo
        let contenedor = document.getElementById("descargas");

        //COMO CREAR NUEVO PARRAFO???
        let nuevoParrafo = document.createElement("p");

        //COMO OBTENER FECHA ACTUAL? 2025/04/18
        let hoy = new Date();
        let dia = hoy.getDate().toString().padStart(2, '0'); //Para hora y minutos mismo codigo
        let mes = (hoy.getMonth() + 1).toString().padStart(2, '0'); // Asegura que el mes tenga dos dígitos
        let anio = hoy.getFullYear();

        let fechaActual = `${dia}/${mes}/${anio}`;
        
        /* 
        Mostrar dia de la semana
        let dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
        let fecha = `Hoy es ${dias[hoy.getDay()]}, ${dia}/${mes}/${anio}`;
        */

        //Usamos los getters para construir el texto
        let texto=`${nuevaDescarga.nombre} ha desacargado ${nuevaDescarga.kg} kg de residuo ${nuevaDescarga.residuo} en el contenedor ${nuevaDescarga.color} el ${fechaActual}`;
        /*Usamos "nuevaDescarga.nombre" y no la propiedad interna "._nombre", es privado y puede no seguir funcionando si cambiamos el getter*/
    
        // Insertamos el texto en el párrafo
        nuevoParrafo.textContent = texto;

        // Añadimos el párrafo AL FINAL contenedor
        contenedor.appendChild(nuevoParrafo); //prepend AL PRINCIPIO
        
        //Actualizar kg en inputs
        actualizarKg(nuevaDescarga);

        //Añadir al array de desccargas la nueva y mostrar por consola 
        addArray(arrayDescargas, nuevaDescarga);
    });
});