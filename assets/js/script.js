// Seleccionar los elementos del DOM a través de su ID o clase
const element = document.querySelectorAll("#to-hide"); // Selecciona todos los elementos con la clase "to-hide"
const element2 = document.getElementById("text-encript"); // Selecciona el elemento con el ID "text-encript"
const element3 = document.getElementById("copy");

// Función para encriptar el texto ingresado por el usuario
function encript(){
    var texto = document.getElementById("text").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""); // Obtener el valor del textarea y convertirlo a minúsculas
    texto = texto.replace(/[^\w\s]/gi, '');
    // Realizar los cambios de acuerdo a las especificaciones
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    hide_element(); // Ocultar los elementos seleccionados con la clase "to-hide"
    add_element(texto); // Agregar el texto encriptado al elemento seleccionado con el ID "text-encript"
    console.log(texto); // Imprimir el texto encriptado en la consola
}

// Función para desencriptar el texto ingresado por el usuario
function no_encript(){
    var inputText = document.getElementById("text").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""); // Obtener el valor del textarea y convertirlo a minúsculas
    inputText = inputText.replace(/[^\w\s]/gi, '');
    // Realizar los cambios inversos a los especificados en la función "encript"
    var texto = inputText
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    hide_element(); // Ocultar los elementos seleccionados con la clase "to-hide"
    add_element(texto); // Agregar el texto desencriptado al elemento seleccionado con el ID "text-encript"
    console.log(texto); // Imprimir el texto desencriptado en la consola
}

// Función para ocultar los elementos seleccionados con la clase "to-hide"
function hide_element(){
    element.forEach(function(el) {
        el.classList.add('hide'); // Agregar la clase "hide" a cada elemento
      });
}

// Función para agregar el texto encriptado o desencriptado al elemento seleccionado con el ID "text-encript"
function add_element(texto){
    element2.classList.remove('hide'); // Remover la clase "hide" del elemento
    element3.classList.remove('hide')
    element2.innerHTML = texto; // Agregar el texto encriptado o desencriptado al elemento
}

function copy_text(){
    const val = document.getElementById("text-encript")
    const text = val.innerText;
    navigator.clipboard.writeText(text);
    alert("Texto copiado")
}