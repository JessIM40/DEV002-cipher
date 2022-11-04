import cipher from './cipher.js';

// Obtener el elemento input (clave)
let key = document.getElementById("key");
// Obtener el elemento textarea
let textUser = document.getElementById("textToEncrypt");
// Agregar escuchador al textarea
// textUser.addEventListener("keydown", checkChar);
// Agregar escuchador al textarea
// textToCipher.addEventListener("input", detectChanges)
// Obtener el elemento p (resultado)
let containerTxtResult = document.getElementById("result");


// Obtener el elemento button ENCRYPT
let btnEncrypt = document.getElementById("btnEncrypt");
// Agregar un escuchador de eventos al boton para que ejecute una accion (mediante una funcion )
btnEncrypt.addEventListener("click", solveText);
// btnEncrypt.addEventListener("click", allowCharacter);
// Obtener el elemento button DECRYPT
let btnDecrypt = document.getElementById("btnDecrypt");
// Agregar un escuchador de eventos al boton para que ejecute una accion (mediante una funcion )
btnDecrypt.addEventListener("click", solveText);


// String con los caracteres permitidos, incluye espacio
// let letterAllowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let charAllowed =" "

// let allowedTo;
// function checkChar(e) {
//     if(letterAllowed.includes(e.key)){
//         allowedTo = true;
//         console.log(e.key);
//         console.log(allowedTo);
//     } else {
//         e.preventDefault()
//         console.log("Usar solo letras en MAYUSCULAS (sin Ñ): \nA B C D E G H I J K L M N O P Q R S T U V W X Y Z");
//         allowedTo = false;
//         console.log(allowedTo);
//     }
//     return console.log(allowedTo);
// }



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



// function detectChanges(event) {
//     // Node.textContent cambia el contenido del nodo (elemento p)
//     // Con event obtenemos las propiedades del evento. La propiedad target (objetivo) hace referencia al input y value al contenido el input
//     containerTxtEncode.textContent = event.target.value;
// }


