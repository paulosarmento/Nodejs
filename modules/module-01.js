console.log('Executando Module-01.js')

const oculta = ()=>{
    console.log('Executando função Oculta')
}
const executa = ()=>{
    console.log('Executando a função executa')
}

const welcome = `Bem Vindo ao módulo module-01.js`

module.exports = {executa, welcome, oculta}