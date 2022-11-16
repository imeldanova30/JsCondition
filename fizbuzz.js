
const nilai = fizzbuzz(30);

function fizzbuzz(parameter){

    if(parameter % 3 == 0 && parameter % 5 == 0 ){
        return console.log('fizzbuzz');
    }else if(parameter % 3 == 0){
        return console.log('fizz');
    }else if(parameter % 5 == 0){
        return console.log('buzz');
    }else{
        return parameter;
    }

}

