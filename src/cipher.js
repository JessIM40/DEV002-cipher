const cipher = {
  encode: function(offset, string) {
    let textEncode = "";
    for (let index = 0; index < string.length; index++) {
      let codeChar = string.charCodeAt(index);
      let codeCharEncode = (codeChar - 65 + offset) % 26 + 65;
      let charCipher = String.fromCharCode(codeCharEncode);
      textEncode = textEncode + charCipher;
    }
    return textEncode;
  }
};

export default cipher;
