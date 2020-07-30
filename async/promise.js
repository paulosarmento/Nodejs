function soma(x){
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
           resolve(x + 500);
       },3000);
    })
}

soma(230).then((resultado)=>{
    console.log(`Resolvido: ${resultado}`);
    
})
