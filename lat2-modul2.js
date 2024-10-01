const matakuliah1 = { //object matakuliah
    kodeMk: 'SIF101',
    namaMk: 'Fondasi Pemrograman dan Struktur Data',
    sks: 3,
    lihatMk() {
        return `Kode Mata Kuliah: ${this.kodeMk} \nNama Mata Kuliah: ${this.namaMk} \nSks: ${this.sks}`;
    }
}

class mahasiswa {
    constructor() {
        console.log("Belum ada datanya");
    }
}

module.exports.matakuliah1 = matakuliah1; //eksport object matakuliah1.
module.exports.mahasiswa = mahasiswa; //eksport class mahasiswa.