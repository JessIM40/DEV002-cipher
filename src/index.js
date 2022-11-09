import cipher from './cipher.js';

// Obtener el elemento input (clave)
let key = document.getElementById("key");
// Obtener el elemento textarea
let textUser = document.getElementById("textToEncrypt");
// Agregar escuchador al textarea
textUser.addEventListener("keydown", checkChar);
// Obtener el elemento p (resultado)
let containerTxtResult = document.getElementById("result");


// Obtener el elemento button ENCRYPT
let btnEncrypt = document.getElementById("btnEncrypt");
// Agregar un escuchador de eventos al boton para que ejecute una accion (mediante una funcion )
btnEncrypt.addEventListener("click", solveText);
// Obtener el elemento button DECRYPT
let btnDecrypt = document.getElementById("btnDecrypt");
// Agregar un escuchador de eventos al boton para que ejecute una accion (mediante una funcion )
btnDecrypt.addEventListener("click", solveText);
// Obtener button Clean
let btnClean = document.getElementById("btnClean");
btnClean.addEventListener("click", cleanInput);



// String con los caracteres permitidos, incluye espacio
let letterAllowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Verifica si la letra presionada esta dentro del string letterAllowed
function checkChar(e) {
    if(e.key === 'Backspace') return; // Permite uso de Backspace
    if(e.key === ' ') return ; // Permite uso de espacio
    if(letterAllowed.includes(e.key)){
        return;
    } else {
        e.preventDefault();
    }
}

function solveText(e) {
    // Obtener el VALOR de la clave, y usar parseInt para cambiar de string a number
    key = parseInt(key.value);
    // Obtener el VALOR del elemento textarea
    textUser = textUser.value;
    let textResult;
    if(e.target.id == "btnEncrypt") {
        // Llama al metodo del objeto cipher (para encriptar)
        textResult = cipher.encode(key, textUser);
    }
    if(e.target.id == "btnDecrypt") {
        // Llama al metodo del objeto cipher (para encriptar)
        textResult = cipher.decode(key, textUser);
    }
    // Muestra el valor del texto encriptado/desencriptado
    containerTxtResult.innerHTML = textResult;
}

function cleanInput(){
    location.reload();
}