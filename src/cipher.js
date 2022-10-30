const cipher = {
  encode: function(offset, string) {
    let textEncode = "";
    for (let index = 0; index < string.length; index++) {

      // Si es un espacio, imprimir un espacio

      
      let codeChar = string.charCodeAt(index);
      console.log(codeChar);
      let codeCharEncode = ((codeChar - 65 + offset) % 26) + 65;
      console.log(codeChar - 65 + offset);
      let charCipher = String.fromCharCode(codeCharEncode);
      console.log(charCipher);
      textEncode = textEncode + charCipher;
    }
    return textEncode;
  }

// cipher.encode(offset, string)
// cipher.decode(offset, string)

 

};

export default cipher;
