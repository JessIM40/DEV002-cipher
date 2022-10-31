import cipher from './cipher.js';

// Obtener el elemento input (clave)
let keyEncrypt = document.getElementById("key");
// Obtener el elemento textarea
let textToCipher = document.getElementById("textToEncrypt");
// Agregar escuchador al textarea
textToCipher.addEventListener("keydown", checkChar);
// Agregar escuchador al textarea
// textToCipher.addEventListener("input", detectChanges)
// Obtener el elemento p (resultado)
let containerTxtEncode = document.getElementById("result");



// Obtener el elemento button
let btnEncrypt = document.getElementById("btnEncrypt");
// Agregar un escuchador de eventos al boton para que ejecute una accion (mediante una funcion )
btnEncrypt.addEventListener("click", encryptText);
// btnEncrypt.addEventListener("click", allowCharacter);


// String con los caracteres permitidos, incluye espacio
let charAllowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

function checkChar(e) {

    if(charAllowed.includes(e.key)){
    } else {
        e.preventDefault()
    }
}

function encryptText() {
    // Obtener el VALOR de la clave, y usar parseInt para cambiar de string a number
    keyEncrypt = parseInt(keyEncrypt.value);
    // Obtener el VALOR del elemento textarea 
    textToCipher = textToCipher.value;
    
    // Llama al metodo del objeto cipher (para encriptar)
    let textEncode = cipher.encode(keyEncrypt, textToCipher);
    // Muestra el valor del texto encriptado/desencriptado
    containerTxtEncode.innerHTML = textEncode;
}



// function detectChanges(event) {
//     // Node.textContent cambia el contenido del nodo (elemento p)
//     // Con event obtenemos las propiedades del evento. La propiedad target (objetivo) hace referencia al input y value al contenido el input
//     containerTxtEncode.textContent = event.target.value;
// }


