const smart = true;
const beautiful = true;
const sameReligion = false;


    if (smart ==true && sameReligion == true ){
    console.log("Jadi Nikah");
    }else if(smart== true && sameReligion == false){
        console.log("gajadi nikah");
        
    }else if(beautiful==true && sameReligion==true){

        console.log("gajadi nikah");
    }else{
        console.log("jadi nikah");
    }  


// pintar, cantik, seiman
//pinter tapi gaseiman, gajadi nikah
// cantik tapi gaseiman, gajadi nikah
// pintar dan seiman, jadi nikah
// cantk dan seiman, gajadi nikah

const tahun = 1945;

if(tahun < 1945){
    console.log("belum merdeka");
}else if(tahun >= 1945){
    console.log("merdeka");
}else{
    console.log("ga tau");
}

//diatas 80 di kasi nilai excelent
//mulai dari 60-80 kasi nilai good job
//nilai 50-59 ngulang
//selebaihnya tidak naik kelas 

const nilai = 79;

if(nilai > 80){
    console.log("Excelent");
}else if(nilai>=60 && nilai<=80){
    console.log("Good Job");
}else if(nilai>=50 && nilai<60){
    console.log("ngulang");
}else{
    console.log("ga naik kelas");
}