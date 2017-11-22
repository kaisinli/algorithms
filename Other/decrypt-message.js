// ascii code range for latin alphabet is 97 - 122

function decrypt(word) {
    if (word.length === 0) return '';

    let decrypted = String.fromCharCode(word.charCodeAt(0) - 1);
    let decryptedCode = 0;

    for (let j = 1; j < word.length; j++) {
      decryptedCode = word.charCodeAt(j) - word.charCodeAt(j-1);
        if(decryptedCode < 97){
          while (decryptedCode < 97) {
            decryptedCode += 26;
          }
        }
          decrypted += String.fromCharCode(decryptedCode);
    }

    return decrypted
}