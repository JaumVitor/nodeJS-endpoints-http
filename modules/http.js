const http = require('http')
const port = 8080

// Criando meu servidor
const server = http.createServer((request, response) => {
  if (request.url === '/') {
    // Definindo o tipo de dado que sera enviado para o client
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end('<h2>Home page</h2>')
  }

  if (request.url === 'test') {
    let archives = [
      {
        name: 'Jaum Cabron',
        age: 22
      },
      {
        name: 'Joana Banaums',
        age: 18
      }
    ]
    // Passando um json como resposta para o client
    response.writeHead(200, { 'content-type': 'application/json' })
    response.end(JSON.stringify(archives))
  }

  if (request.url === '/about') {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end('<h2>About page</h2>')
  }
})

// Definindo porta que o servidor vai escutar
server.listen(port, () => {
  console.log('Rodando meu servidor!')
})
