const path = require("path");

// Arquivo atual
console.log(path.basename(__filename))

// Diretório atual
console.log(path.dirname(__filename))

// Extenção do arquivo atual
console.log(path.extname(__filename))

// Dados do arquivo atual
console.log(path.parse(__filename))

// Une informações para montar um caminho
console.log(path.join(__dirname,'teste'))