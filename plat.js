let platNomor = ['H 1456 NDR', 'H 3782 WIB', 'H 2467 WIT'];

let tanggalHariIni = 15;

platNomor.forEach(function(plat) {
    let angka = plat.split(' ')[1]; 
    let angkaTerakhir = angka[angka.length - 1]; 
    let jenisPlatnomor = '';

    switch (angkaTerakhir) {
        case '0':
            jenisPlatnomor = 'GENAP';
            break;
        case '1':
            jenisPlatnomor = 'GANJIL';
            break;
        default:
    }

   let jenistanggal = (tanggal % 2 === 0) ? 'GENAP' : 'GANJIL';

 
    let bolehmelintas = (jenisPlatnomor === jenistanggal) ? 'YES' : 'NO';

    console.log(${plat} adalah plat ${jenisPlatnomor} maka ${bolehmelintas} melintas karena hari ini tanggal ${tanggalHariIni});
});
