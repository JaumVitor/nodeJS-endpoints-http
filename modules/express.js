const express = require('express')
const app = express()

// Usando para meu servidor entender as requisiçõs json, cujo serão enviadas (Post)
app.use(express.json())

const port = 8080

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

app.get('/home', (request, response) => {
  response.status(200).send('<h1>Welcome</h1>')
})

app.get('/users', (request, response) => {
  response.status(200).json(archives)
})

app.post('/users', (request, response) => {
  archives.push(request.body)
  response.status(200).json(archives)
  response.status(200).json(request.body)
})

app.listen(port, () => console.log(`listening port ${port}`))
