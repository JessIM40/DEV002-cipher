import cipher from './cipher.js';
// Obtener el elemento button desde html para trabajarlo en js
let btnEncrypt = document.getElementById("btnEncrypt");
// Agregar un escuchador de eventos al boton para que ejecute una accion (mediante una funcion )
btnEncrypt.addEventListener("click", encryptText);

function encryptText() {
    // Obtener el VALOR del input (clave)
    let keyEncrypt = parseInt(document.getElementById("key").value);
    
    // Obtener el VALOR del elemento textarea desde html para trabajarlo en js
    let txtToCipher = document.getElementById("textToEncrypt").value;

    // Llama al metodo del objeto cipher (para encriptar)
    let textEncode = cipher.encode(keyEncrypt, txtToCipher);

    // Muestra el valor del textarea
    document.getElementById("result").innerHTML = textEncode;
    
}



//console.log(cipher);
