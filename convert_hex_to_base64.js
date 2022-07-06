//convert hex to base64
//49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d should return SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t

function convertHexToBase64(){
  var hex = "49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d";
  var base64 = hex.match(/.{1,2}/g).map(function(v){
    return String.fromCharCode(parseInt(v, 16));
  }).join('');
  console.log(base64);
}

//can't figure this out for some reason instead of returing the base64 string I get the readable english translation of the hex string
convertHexToBase64();