import cipher from './cipher.js';
// Obtener el elemento button desde html para trabajarlo en js
let btnEncrypt = document.getElementById("btnEncrypt");
// Agregar un escuchador de eventos al boton para que ejecute una accion (mediante la funcion )
btnEncrypt.addEventListener("click", encryptText);

function encryptText() {
    // Obtener el VALOR del elemento textarea desde html para trabajarlo en js
    let txtToCipher = document.getElementById("textToEncrypt").value;
    // Muestra el valor del textarea
    document.getElementById("result").innerHTML = txtToCipher;
}

//console.log(cipher);
