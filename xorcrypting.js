//This is used to encrypt text using XOR encryption and then decrypt it using the same key.

class XOR {
  constructor(text, key) {
    this.text = text;
    this.key = key;
  }

  encrypt() {
    var result = "";
    for (var i = 0; i < this.text.length; i++) {
      result += String.fromCharCode(this.text.charCodeAt(i) ^ this.key.charCodeAt(i % this.key.length));
    }
    return result;
  }

  decrypt() {
    return(this.encrypt());
  }
}

console.log(new XOR('Hi my name is michael', 'name').encrypt());
const encryptedString = new XOR('Hi my name is michael', 'name').encrypt();
console.log(new XOR(encryptedString, 'name').decrypt())