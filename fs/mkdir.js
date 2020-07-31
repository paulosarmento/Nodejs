const fs = require('fs')
const assets = ['css', 'js', 'images', 'fonts', 'lib']

function make(dir){

    dir.forEach((item) => {
        
        fs.mkdir('projeto/assets/imagens', {recursive:true}, (err)=>{
            if(err) throw err
            console.log('Diretório criado com sucesso!')
        })
    })
}
make(assets)