//throw new Error('Ah não é possível, na minha maquina funciona!')

//tente executar alguma coisa, de der erro execute o catch automaticamente
function execute(){
    executeTo()
}
function executeTo(){
    throw new Error('Ah não é possível, na minha maquina funciona!')
}
function init(){
    try{
        execute()
    }catch(error){
        console.log(`Temos um problema!${error}`)
    }
}
init ()
console.log('Depois do erro')