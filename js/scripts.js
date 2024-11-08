// 144. Seleccionar Elementos con querySelector
// querySelector -> retorna 0 a 1 elemento
// Buena practica es con el id
// const heading = document.querySelector("#heading");
const heading = document.querySelector(".header__texto h2");
heading.textContent = "Nuevo heading";
// heading.classList.add("nueva-clase");
// console.log(heading);

// Trae el primero
const a = document.querySelector("a");
// console.log(a);

const noExiste = document.querySelector(".no-existe");
// Devuelve null
// console.log(noExiste);

// 145. Seleccionar Elementos con querySelectorAll
// querySelectorAll
const enlaces = document.querySelectorAll(".navegacion a");
// Devuelve todos que esten en la clase .navegacion y que sean a
console.log(enlaces);
// Devuelve el primero
console.log(enlaces[0]);
enlaces[0].textContent = "Nuevo enlace";
enlaces[0].href = "https://www.google.com/";
enlaces[0].classList.add("nueva-clase");
// enlaces[0].classList.remove("navegacion__enlace");

// 145. 5:59 del video
// getElementById
const heading2 = document.getElementById("heading");
console.log(heading2);

// 146. Crear HTML con createElement
console.log("146. Crear HTML con createElement");
// Se recomienda crear etiquetas HTML con mayusculas sin la apertura y cierre de esta.
const nuevoEnlace = document.createElement("A");

// Agregar el href
nuevoEnlace.href = "nuevo-enlace.html";

// Agregar el texto
nuevoEnlace.textContent = "Tienda Virtual";

// Agregar la clase
nuevoEnlace.classList.add("navegacion__enlace");

//Agregarlo al documento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

// 147. Eventos en JavaScript
// console.log("147. Eventos en JavaScript");
// console.log(1);

// Primer evento
// window está en un nivel más alto que document
// load espera a que el JS y los archivos que dependen de este listo
// esto incluye CSS e imagenes
// window.addEventListener("load", function () {
//   console.log(2);
// });

// // Otra forma de registrar el evento load
// window.addEventListener("load", imprimir);

// function imprimir() {
//   console.log(22);
// }

// Segundo evento
// Otra forma de registrar el evento load
// Sintasis diferente pero hacen lo mismo
// window.onload = function () {
//   console.log(3);
// };

// // Tercer evento
// document.addEventListener("DOMContentLoaded", function () {
//   console.log(4);
// });

// Diferencia entre load y DOMContentLoaded
// load espera a que se descarge todo el HTML, CSS y imagenes
// DOMContentLoaded solo espera a que se descarge el HTML, pero no espera CSS o imagenes

// ¿Cual vas a utlizar?
// DOMContentLoaded se usará más, ya que es más rápido y no espera a CSS o imagenes
// porque solo tiene el html y usualmente no se va a modificar las hojas de estilo con JS
//

// console.log(5);

// Cuando le doy scroll a la página web o ventana (desplazar la barra de desplazamiento de la ventana hacia arriba o hacia abajo)
// window.onscroll = function (evento) {
//   // evento -> Para obtener más la información del evento
//   console.log("scrolling...");
//   console.log(evento);
// };

// 148. Reaccionar a Clicks en JavaScript
// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector(".boton--primario");
// // Una vez que se selecciona un elemento se tiene disponible el addEventListener en todo los
// // elementos que selecciones (Registrar un evento)
// // Evento -> e, evento, event, evt
// btnEnviar.addEventListener("click", function (evento) {
//   console.log(evento);
//   // evento.target -> a que le elemento HTML de dimos click
//   console.log(evento.target);
//   // preventDefault -> Para validar un formulario, para que no recargue la página
//   evento.preventDefault();
//   console.log("Enviando formulario con click...");
// });

// 149. Eventos con el teclado
// Eventos de los inputs y textarea

const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
// change -> Se ejecuta cuando se sale del input
// nombre.addEventListener("change", function (evento) {
//   console.log("Escribiendo...");
//   // console.log(evento.target.value);
// });

// input -> Cada vez que se escribe algo en el input
// Primera forma
// nombre.addEventListener("input", function (e) {
//   // console.log("Escribiendo...");
//   console.log(e.target.value);
//   // Para capturar el valor de los que se escribe en el input y guardarlo
//   // en la variable valor
//   // let valor = e.target.value;
//   // Para poner el valor lo que se va escribiendo en el input en minisculas
//   // no deja escribir en mayusculas
//   // nombre.value = valor.toLowerCase();
// });

// email.addEventListener("input", function (e) {
//   console.log(e.target.value);
// });

// mensaje.addEventListener("input", function (e) {
//   console.log(e.target.value);
// });

// Segunda forma
nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

function leerTexto(e) {
  // console.log("Escribiendo...");
  // console.log(e.target.value);
  // console.log(e.target);
  datos[e.target.id] = e.target.value;
  console.log(datos);
}

// 150. Eventos en Formularios
// El evento de submit
const formulario = document.querySelector(".formulario");
// formulario.addEventListener("submit", function (evento) {
//   evento.preventDefault();
//   console.log("Enviando formulario con button ...");
// });

// Cuando usar un click o un submit
// Usualmente en un formulario se usa utiliza el submit
// click -> Si se escuha por el click este debe estar asociado a un boton.
// Además, si se escuha por un click puede ser a cualquier elemento hasta un texto, img, etc.
// submit -> Si se escuha por un submit debe estar asociado por un formulario
// y debe tener a fuerza un input de tipo submit (type="submit").

// Como organizar el codigo o estructurar el codigo:
// 1. Las variables o constantes
// 2. Los event listeners
// 3. Las funciones

// 151. Creando un Validador de Formularios Parte 1 de 2
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  // Validar el formulario
  const { nombre, email, mensaje } = datos;
  console.log(nombre);
  console.log(email);
  console.log(mensaje);
  if (nombre === "" || email === "" || mensaje === "") {
    // console.log("El nombre esta vacio.");
    // console.log("El nombre o email estan vacios.");
    // mostrarError("Todos los campos son obligatorios");
    mostrarAlerta("Todos los campos son obligatorios", true);
    return;
  }
  // mostrarCorrecto("Mensaje enviado correctamente");
  mostrarAlerta("Mensaje enviado correctamente.");
  console.log("Enviando formulario con button ...");
});

// Muestra un error en pantalla
// function mostrarError(mensaje) {
//   const error = document.createElement("P");
//   error.textContent = mensaje;
//   error.classList.add("error");

//   formulario.appendChild(error);

//   // Desaparezca despues de 5 segundos
//   setTimeout(() => {
//     // remove elimina un elemento HTML
//     error.remove();
//   }, 5000);
//   console.log(error);
// }

// Muestra un correcto en pantalla
// function mostrarCorrecto(mensaje) {
//   const correcto = document.createElement("P");
//   correcto.textContent = mensaje;
//   correcto.classList.add("correcto");

//   formulario.appendChild(correcto);

//   // Desaparezca despues de 5 segundos
//   setTimeout(() => {
//     // remove elimina un elemento HTML
//     correcto.remove();
//   }, 5000);
//   console.log(correcto);
// }

// 152. Creando un Validador de Formularios Parte 1 de 2
// Refactorizando el código:
function mostrarAlerta(mensaje, error = null) {
  const alerta = document.createElement("P");
  alerta.textContent = mensaje;

  if (error) {
    alerta.classList.add("error");
  } else {
    alerta.classList.add("correcto");
  }

  formulario.appendChild(alerta);
  setTimeout(() => {
    // remove elimina un elemento HTML
    alerta.remove();
  }, 5000);
  console.log(alerta);
}
