const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(modification = true) {
    this.modification = modification;
  }

  encrypt(message, key) {
    if(message === undefined || key === undefined){
      throw new TypeError('message or key not set');
    }
    let cipher = [];
    let j = 0;
    let charCodeCipher = 0;
    let keyArr = key.split('');
    for(let i=0; i<message.length; i++){
      let charCodeMessage = message.charCodeAt(i);
      if(message[i] === ' ' || charCodeMessage < 65 || charCodeMessage > 90 && charCodeMessage < 97 || charCodeMessage > 122){
        if(i <= keyArr.length){
          keyArr.splice(i, 0, ' ');
        }
      }
      else if(i === keyArr.length){
        keyArr[keyArr.length] = key[j];
        j++;
        if(j > key.length - 1){
          j = 0;
        }
      }
    }
    key = keyArr.join('');
    for(let i=0; i<message.length; i++){
      let charCodeMessage = message.charCodeAt(i);
      let charCodeKey = key.charCodeAt(i);
      if(message[i] === ' ' || charCodeMessage < 65 || charCodeMessage > 90 && charCodeMessage < 97 || charCodeMessage > 122){
        cipher[i] = message[i];
      }
      else{
        if(charCodeMessage >= 65 && charCodeMessage <= 90){
          if(charCodeKey >= 65 && charCodeKey <= 90){
            charCodeCipher = ((charCodeMessage + charCodeKey) % 26) + 65;
          }
          else{
            charCodeCipher = ((charCodeMessage + (charCodeKey - 32)) % 26) + 65;
          }
        }
        if(charCodeMessage >= 97 && charCodeMessage <= 122){
          if(charCodeKey >= 65 && charCodeKey <= 90){
            charCodeCipher = (((charCodeMessage - 32) + charCodeKey) % 26) + 65;
          }
          else{
            charCodeCipher = (((charCodeMessage - 32) + (charCodeKey - 32)) % 26) + 65;
          }
        }
        let charCipher = String.fromCharCode(charCodeCipher);
        cipher[i] = charCipher;
      }
    }
    if(this.modification === false){
      cipher.reverse();
    }
    return cipher.join('');
  }   

  decrypt(message, key) {
    if(message === undefined || key === undefined){
      throw new TypeError('message or key not set');
    }
    let decipher = [];
    let j = 0;
    let charCodeDecipher = 0;
    let keyArr = key.split('');
    for(let i=0; i<message.length; i++){
      let charCodeMessage = message.charCodeAt(i);
      if(message[i] === ' ' || charCodeMessage < 65 || charCodeMessage > 90){
        if(i <= keyArr.length){
          keyArr.splice(i, 0, ' ');
        }
      }
      else if(i === keyArr.length){
        keyArr[keyArr.length] = key[j];
        j++;
        if(j > key.length - 1){
          j = 0;
        }
      }
    }
    key = keyArr.join('');
    for(let i=0; i<message.length; i++){
      let charCodeMessage = message.charCodeAt(i);
      let charCodeKey = key.charCodeAt(i);
      if(message[i] === ' ' || charCodeMessage < 65 || charCodeMessage > 90){
        decipher[i] = message[i];
      }
      else{
        if(charCodeKey >= 65 && charCodeKey <= 90){
          charCodeDecipher = ((charCodeMessage + 26 - charCodeKey) % 26) + 65;
        }
        else{
          charCodeDecipher = ((charCodeMessage + 26 - (charCodeKey - 32)) % 26) + 65;
        }
        let charDecipher = String.fromCharCode(charCodeDecipher);
        decipher[i] = charDecipher;
      }
    }
    if(this.modification === false){
      decipher.reverse();
    }
    return decipher.join('');
  }
}
module.exports = VigenereCipheringMachine;