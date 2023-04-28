const titulo = document.querySelector("#titulo");
const imagen = document.querySelector("#imagen");
const enlace = document.querySelector("#enlace");
const cuerpoPagina = document.querySelector("body");

const IMG_1 = "https://images.ecestaticos.com/WQdxthvn11oGVR4dzkf-KWZWn3s=/0x0:2120x1414/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg"
const IMG_2 = "https://holatelcel.com/wp-content/uploads/2022/11/Conoce-todo-sobre-la-nueva-oeli%CC%81cula-de-Avatar.-Blog-Hola-Telcel-696x696.jpeg"
const IMG_3 = "https://concepto.de/wp-content/uploads/2018/09/lenguaje-de-programaci%C3%B3n-e1537466894547.jpg"

const ENLACE_1 = "https://erick-c3.github.io/Trayecto-de-Programador-/"
const ENLACE_2 = "https://discord.com/"
const ENLACE_3 = "https://es.stackoverflow.com/"

let opcionRecibida = prompt("ingrese a la pagina : A,B o C");


if ( opcionRecibida == A) {
    cuerpoPagina.style.backgroundColor = "orange";
    cuerpoPagina.style.color = "black";
    imagen.scr = IMG_1;
    enlace.href = ENLACE_1;
} else if (opcionRecibida == B) {
    cuerpoPagina.style.backgroundColor = "black";
    cuerpoPagina.style.color = "white";
    imagen.scr = IMG_2;
    enlace.href = ENLACE_2;
} else if (opcionRecibida == C) {
    cuerpoPagina.style.backgroundColor = "pink";
    cuerpoPagina.style.color = "green";
    imagen.scr = IMG_3;
    enlace.href = ENLACE_3;
}