const { Console } = require('console')

const fs = require('fs').promises

async function read() {
    const data = await fs.readFile('texto.txt', 'binary')
    return new Buffer.from(data)
}

try{
    read().then(data=> Console.log(data.toString()))
}catch(err){
    console.log(err)
}