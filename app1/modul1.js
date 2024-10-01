
var ket = "Hello"; 
const masuk = (pesan) => {
    console.log(pesan);
    console.log("Thats All")
}

function myData() {
    console.log('file saya= ' +__filename);
}

exports.masuk = masuk;
module.exports.informasi = myData;

