// Asynchroous (Untuk menjelaskan proses Asynchronous)
// untuk mencoba jalankan dengan node di terminal:
//      > node lat1-async.js
//

const ambilDataUserAsync = (id, callback) => {
    const waktu = id === 1 ? 3000 : 1000;
    setTimeout(() => {
        const nama = id === 1 ? 'Augury' : 'Rayputra';
        callback({id, nama})
    }, waktu)
};

const userPertama = ambilDataUserAsync(1, (dataHasil) => {
    console.log(dataHasil);
});

const userKedua = ambilDataUserAsync(2, (dataHasil) => {
    console.log(dataHasil);
});

const menyapa = "Hello World";
console.log(menyapa);