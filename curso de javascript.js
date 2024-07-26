/*let nombre = "memo";

frutas = ["banana", "manzana", "durazno","damasco"];
*/

let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero"
};

document.write(persona.nombre);

/*funciones*/

function saludar() {
    respuesta = prompt ("hola ¿Cómo estás?")
        if (respuesta == "bien") {
            alert("me alegro")
        } else if (respuesta == "mal") {
            alert("que lástima")
        }
        else {
            alert ("siga")
        }
}

saludar();

let nombre = prompt ("Bienvenide ¿Cual es tu nombre?");

/*document.write(nombre);*/

document.getElementById("párrafo").textContent = `Hola, ${nombre}. Bienvenido a nuestra página.`;

/*Funciones flecha*/


