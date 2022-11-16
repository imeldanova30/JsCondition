function greeting(param){
    return 'hallo ${param}';
}

const ketemuHaki = greeting("haki");
const ketemuAldo = greeting("aldo");

console.log(ketemuAldo);


function Pengurangan(param1, param2){
    var kurang = param1-param2;
    return kurang;
}

const kurang1 = Pengurangan(10,2);
const kurang2 = Pengurangan(11,3);
const kurang3 = Pengurangan(5,1);
const kurang4 = Pengurangan(7,1);

console.log(kurang1);
console.log(kurang2);
console.log(kurang3);
console.log(kurang4);


//Hitung panjang String

function cekString (sentence){
    total = sentence.length;
    return total;
}

const sentence= cekString("hello halo");

console.log(sentence);

// Membuat function rata-rata nilai

function average(siswa1,siswa2,siswa3,siswa4,siswa5,siswa6,siswa7,siswa8,siswa9,siswa10){
    total= siswa1+siswa2+siswa3+siswa4+siswa5+siswa6+siswa7+siswa8+siswa9+siswa10;
    rataRata = total/arguments.length;
    return rataRata;
}

//untuk banyak parameter ...param;

const Hasil = average(1,2,2,3,4,5,6,7,8,1);
console.log(Hasil);

// Membuat function type Data

function typeData(param1){
 return typeof param1;
}

const data = typeData("halo");
console.log(data);