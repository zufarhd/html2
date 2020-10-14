var nama = ["Zufar", "Hario", "Dewantoro"];
var umur = ["23","years","old"];
var gabung = nama.concat(umur);
var selip = nama.concat(umur);
selip.splice(3,0,"Tahun","1997");

//console.log(cars);
document.getElementById("Nama").innerHTML = "Daftar Nama = "+nama;
document.getElementById("Umur").innerHTML = "Daftar Umur = "+umur;
document.getElementById("Gabungan").innerHTML = "Gabungan Array = "+gabung;
document.getElementById("Selip").innerHTML = "Menyelipkan Array = "+selip;

for(var i=0;i<selip.length;i++){
    console.log(selip[i]);
}

function kurang10(){
    var inputan = document.getElementById("input").value;
    var hasil = inputan-10;
    document.getElementById("jajal").innerHTML="Hasil = "+hasil;
}
function kurang1(){
    var inputan = document.getElementById("input").value;
    var hasil = inputan-1;
    document.getElementById("jajal").innerHTML="Hasil = "+hasil;
}
function tambah10(){
    var inputan = parseInt(document.getElementById("input").value);
    // var temp = 10;
    var hasil = inputan + 10;
    document.getElementById("jajal").innerHTML="Hasil = "+hasil;
}
function tambah1(){
    var inputan = parseInt(document.getElementById("input").value);
    //var temp = 1;
    var hasil = inputan + 1;
    document.getElementById("jajal").innerHTML="Hasil = "+hasil;
}

function coba1(){
    var inputan = document.getElementById("input").value;
    document.getElementById("jajal").innerHTML= "Angka Asli"+inputan;
}
var inputan;

function tambah(n){
    inputan = parseInt(document.getElementById("input").value);
    var hasil = inputan + n;
    
    console.log(n);
    console.log(hasil);
    document.getElementById("jajal").innerHTML="Hasil = "+hasil;
}
