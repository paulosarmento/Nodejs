require('./subdirectory/sub')
console.log('---------------------------')
console.log(`Nome do arquivo:`, __filename)
console.log(`Diretório do arquivo:`,__dirname)
console.log(`Parâmetros de execução:`,process.argv)
//console.log(`Nome do arquivo:`,process.env)
console.log(`Sistema operacional:`,process.env.OS)
console.log(`Usuário do SO:`,process.env.USERNAME)
console.log(`Idioma:`,process.env.LANG)
console.log(`Nome do Server:`,process.env.COMPUTERNAME)
switch(process.argv[2]){

    case '-a' :
        console.log('Execute rotina principal');
        break;
    case'-i':
        console.log('Execute a instalação');
        break;
    case'-q':
        console.log('Encerrando a apliação');
        process.exit();//Interrompe imediatamente o código.
        break;
    default:
        console.log('parêmetro Inválido');

}
console.log(`Nome do arquivo:`, process.platform)