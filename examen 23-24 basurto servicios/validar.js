import Servicios from './servicio.js';
import Servicio from './servicio.js';

const formulario = document.getElementById('formulario-servicio');
const servicios = [];

formulario.addEventListener('submit', function (e) {
  e.preventDefault(); // evitamos que recargue la pagina y su envio automatico

  const nombre = document.getElementById('nombre').value.trim(); //trim para eliminar espacios del fianl y del principio
  const pabellonInput = document.getElementById('pabellon').value.trim();
  const mostrar = document.getElementById('mostrar').checked;

  // Validar nombre
  const nombreValido = /^[A-Za-z0-9\-]+$/.test(nombre);
  if (!nombreValido) {
    alert('El nombre del servicio solo puede contener letras, números o guion alto.');
    return;
  }

  // Validar pabellón por nombre obteniendo el numero para guardar en _pabellon del constructor
  const indicePabellon = Servicios.pabellones.findIndex(//findIndex devuelve el indice en el array, -1 si no encuentra una coincidencia
    p => p.toLowerCase() === pabellonInput.toLowerCase()
  );
  if (indicePabellon === -1) {
    alert('Seleccione un pabellón válido.');
    return;
  }

  // Crear servicio
  const nuevoServicio = new Servicio(nombre, indicePabellon, mostrar);
  servicios.push(nuevoServicio);
  console.log(nuevoServicio.mostrarInfo());
});
