const fs = require('fs')

fs.readFile('text.txt',(err, data)=>{
    if(err) throw err
    
    console.log(data.toString())
})

const texto = fs.readFileSync("text.txt");

console.log(`Texto: ${texto}`) 
