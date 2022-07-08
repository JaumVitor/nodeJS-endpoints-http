const fs = require('fs')
const path = require('path')

// Cria uma pasta no caminho passado
// fs.mkdir(path.join(__dirname, 'test'), error => {
//   // Emite erro quando não consegue executar a função
//   if (error) {
//     return console.log(`Erro: ${error}`)
//   }

//   console.log('Diretorio criado com sucesso!')
// })

// Escreve/substiui em um arquivo (Não é uma função sincrona)
fs.writeFile(
  path.join(__dirname, 'pasta', 'text.txt'),
  'Substituindo arquivo',
  error => {
    if (error) {
      return console.log(error)
    }

    console.log('Arquivo criado com secesso!')

    fs.appendFile(
      path.join(__dirname, 'pasta', 'text.txt'),
      '- ADICIONANDO CONTEUDO',
      error => {
        if (error) {
          return console.log(error)
        }

        console.log('Conteudo inserido com sucesso!')
      }
    )

    // Adiciona conteudo no aquivo
    fs.appendFile(
      path.join(__dirname, 'pasta', 'text.txt'),
      '- akjhdfalkshdfkljhasfkljhsh',
      error => {
        if (error) {
          return console.log(error)
        }

        console.log('Conteudo inserido com sucesso!')
      }
    )

    // Lendo o arquivo (Leirua deve ser feita apos escrita, pelo assicronismo do write)
    fs.readFile(
      path.join(__dirname, 'pasta', 'text.txt'),
      'utf8',
      (error, data) => {
        if (error) {
          return console.log(error)
        }

        console.log(data)
      }
    )
  }
)
