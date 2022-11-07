const cipher = {
  encode: function(offset, string) {
    if(typeof offset === "number" && typeof string === "string"){
      let textEncode = "";
      for (let index = 0; index < string.length; index++) {
        let codeChar = string.charCodeAt(index);
        let codeCharEncode = (codeChar - 65 + offset) % 26 + 65;
        let charCipher = String.fromCharCode(codeCharEncode);
        textEncode = textEncode + charCipher;
      }
      return textEncode;
    }
    
  },

  decode: function(offset, string) {
    let textDecode = "";
    for (let index = 0; index < string.length; index++) {
      let codeChar = string.charCodeAt(index);
      let codeCharEncode = (codeChar - 90 - offset) % 26 + 90;
      let charCipher = String.fromCharCode(codeCharEncode);
      textDecode = textDecode + charCipher;
    }
    return textDecode;
  }
};

export default cipher;
