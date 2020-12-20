//!Add elements to the page
const body = document.body;
//body.append("Hello World"); //?append es para strings y elementos
//body.appendChild("Hello World"); //?appendChild requiere un nodo (elements), NO un texto

//!Crear Elementos
//const div = document.createElement("div");

//!Modificar elementos de texto

//div.innerText = "Hola Mundo"; //?Unicamente es texto
//div.textContent = "Hello World 2"; //?Imprime todo el contendio, espacio etc sin importar stilos
//const div = document.querySelector("div");
//console.log(div.textContent);
//console.log(div.innerText);

//!Modificar el HTML
/*
div.innerHTML = "<strong>Hello World 2</strong>";

//?Mas seguro que usar innerHTML

const strong = document.createElement("strong");
strong.innerText = "Hola Mundo 2";
div.append(strong);

body.append(div);
*/

const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

//!Removiendo elementos
//spanBye.remove();
//div.removeChild(spanHi);

//!Regresandolos
//div.append(spanBye);

//!Modificando atributos de los elementos
spanHi.setAttribute("id", "nuevo id");
console.log(spanHi.getAttribute("id"));

spanHi.removeAttribute("title");

//!Acceder atributos de datos
console.log(spanHi.dataset);
console.log(spanHi.dataset.test);
spanBye.dataset.newName = "Jesus";

//!Modificando Clases
spanHi.classList.add("new-class");
spanHi.classList.remove("hi1");
spanHi.classList.toggle("hi2"); //Elimina la clase si esta, la agrega si no existe

//!Modificando el estilo
spanHi.style.color = "red";
spanHi.style.backgroundColor = "green";
