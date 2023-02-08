const fs = require('fs')
const path = require('path')

// criar pasta
/* fs.mkdir(path.join(__dirname,'/test'),(error)=>{
    if(error){
        return console.log('Erro: ', error)
    }
    console.log('Pasta criada com sucesso!')
})
 */

// criar arquivo
fs.writeFileSync(path.join(__dirname,'/test', 'test.txt'),'hello node!',(error)=>{
    if(error){
        return console.log('Erro: ', error)
    }
    console.log('Arquivo criada com sucesso!')

    // adicionar a um arquivo
    fs.appendFile(path.join(__dirname,'/test', 'test.txt'),'hello node!',(error)=>{
        if(error){
            return console.log('Erro: ', error)
        }
        console.log('Arquivo alterado com sucesso!')
    })

    // ler a um arquivo
    fs.readFile(path.join(__dirname,'/test', 'test.txt'),'utf8',(error,data)=>{
        if(error){
            return console.log('Erro: ', error)
        }
        console.log(data)
    })
})