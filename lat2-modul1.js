const masuk = (pesan) => {
    return `${pesan} \nThats All`;
}

const dataUsia = (nama, thnLahir) => {
    let usia = 2024 - thnLahir; 
    console.log(`Hai ${nama}`);
    console.log(`Pada tahun 2024 usia anda ${usia} tahun`);
}

const phi = 3.14;

module.exports = masuk; //eksport function masuk sebagai modul (representasi modul lat2-modul1.js)
module.exports.nama_thnLhr = dataUsia; //eksport function data sebagai method nama_usia.
module.exports.phi = phi; //eksport variabel sebagai data field phi.