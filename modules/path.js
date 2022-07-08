const path = require('path')

// Variaveis globais do js
console.log(__filename)
console.log(__dirname)

// Base do file e diretorio
console.log(path.basename(__filename))
console.log(path.basename(__dirname))

// Caminho ate o diretorio do arquivo ou diretorio
console.log(path.dirname(__filename))
console.log(path.dirname(__dirname))

// extenção do aqruivo
console.log(path.extname(__filename))

// criar objeto do arquivo
console.log(path.parse(__filename))

// Junção de caminhos 
console.log(path.join(__dirname, 'novo arquivo', 'newArquivo2'))