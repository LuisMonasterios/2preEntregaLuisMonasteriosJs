let nombreAlumno = prompt("Hola Bienvenido al IPCH, ¿Cómo es tu Nombre?");
function saludarAlumno () {
    document.write ("Ni Hao " + nombreAlumno + " este es tu Promedio Final</br></br>")
}
saludarAlumno();

let PPY = parseInt(prompt("Ingrese Nota: Proyectos"));
let EP = parseInt(prompt("Ingrese Nota: Examen Parcial"));
let PC = parseInt(prompt("Ingrese Nota: Prácticas Calificadas"));
let EF = parseInt(prompt("Ingrese Nota: Examen Final"));
let faltas = parseInt(prompt("Cantidad de Faltas Injustificadas"))
let nf = 0;

let calculo = ((PPY+EP+PC+EF)/4); 
if (faltas >= 6) {
    calculo = ((PPY+EP+PC+nf)/4);
}
let pro = (" Proyectos:" + PPY);
let epar = (" Examen Parcial:" + EP);
let prac = (" Prácticas Calificas:" + PC);
let efin = (" Examen Final:" + EF);
let fal = (" Faltas Injustificas:" + faltas);

let registroNotas = [pro, epar, prac, efin, fal];

function mostrarRegistro() {
    document.write("<b>Notas Registradas:</b>" + "<li>"+registroNotas+"</li>" +"</br></br>")
}
mostrarRegistro();

function sumarNumeros() {
    document.write("<b>Nota Promedio Final:</b> " +calculo +"</br></br>");
}
sumarNumeros();
