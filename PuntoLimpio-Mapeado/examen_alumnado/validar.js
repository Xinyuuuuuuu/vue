/* 
        a. Número positivo del 1 al 100 en el campo Kg.
        b. Nombre formado por  mayúsculas o minúsculas y espacios, entre 3 y 20 letras. Utilizar una expresión REGULAR. 
        c. Los errores en un ALERT. Si hay un solo error, se mostrará un error; si hay dos errores, se mostrarán los dos a la vez en el mismo alert.
        d. En caso de que la validación sea correcta, se continuará con el resto de operaciones; de lo contrario se parará el programa.
        e. En ningún caso se enviará el formulario a otra página.
*/
function validarFormulario () {
    let errores = []; //Array ya quer se mostrarán todos los mensjaes de error

    //Asignamos los valores del DOM a las variables que vamos a validar
    let nombre = document.getElementById("nombre").value.trim();//TRIM para quitar espacios del principio y final
    let kg = document.getElementById("kg").value.trim(); 

    //a. Validar kg positivo entre 1 y 100
    let kgNumero = parseInt(kg); //parseInt para numeros enteros y parseFloat para numeros con decimales
    //parseInt puede devolver: solo el cacho con el número del texto introducuido, o NaN
    if (isNaN(kgNumero) || kgNumero < 1 || kgNumero > 100) {
        errores.push("El campo Kg debe ser un número positivo entre 1 y 100."); 
    }

    //b. Validar nombre
    let expresionNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{3,20}$/; // Expresión regular  en javascript para validar nombre (/.../), \s permitiría tabs y otros espacios
    if (!expresionNombre.test(nombre)) { //con ! ya que queremos push el error si no respeta la expresión regular
        errores.push("El nombre debe tener entre 3 y 20 letras y solo puede contener letras y espacios.");
    }

    //c. Mostrar todos los errores en un alert
    if (errores.length > 0) {
        alert(errores.join("\n")); // Unir los mensajes de error con un salto de línea y mostrarlos en un alert
        return false; // La función nos devuelve false para saber que hay errorres y luego controlar que se detenga el programa.
    }

    return true; // Si no hay errores no devuelve true y continuaremos
}
