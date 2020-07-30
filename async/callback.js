function soma(x, callback){

    return setTimeout(()=>{
        return callback(null, x +500);
    },3000);
}

function resolveSoma(err, resultado){
    if(err) throw err;
    console.log(resultado);
}


console.log(soma(200, resolveSoma));