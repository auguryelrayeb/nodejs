// Synchronous (Untuk menjelaskan proses Asynchronous)
// untuk mencoba jalankan dengan node di terminal:
//      > node lat1-sync.js
//

const ambilDataUserSync = (id) => {
    const nama = id === 1 ? 'Augury' : 'Rayputra';
    return { id, nama};
}

const userPertama = ambilDataUserSync(1);
console.log(userPertama);

const userKedua = ambilDataUserSync(2);
console.log(userKedua);

const menyapa = "Hello World";
console.log(menyapa);