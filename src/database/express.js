const express = require('express')
const app = express()
const UserModel = require('../models/user.model')

app.use(express.json())

app.use((req, res, next) => {
  // So executa a request depois do next()
  // O console não funciona
  console.log('Request Type: ' + req.method)
  console.log('Request Type: ' + req.headers['content-type'])
  console.log('Date' + new Date())

  setTimeout(() => next(), 2000)
})

app.get('/users', async (req, res) => {
  try {
    // Atendendo requisição do client fazendo busca no
    const user = await UserModel.find({ name: 'Diego' })
    res.status(200).json(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

app.get('/users/:id', async (req, res) => {
  // Fazendo busca do objeto pelo id
  try {
    // Pegando id da url
    const id = req.params.id
    // Buscando no banco o user com id referente
    const user = await UserModel.findById(id)
    res.status(200).json(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

app.patch('/users/:id', async (req, res) => {
  // Alterando objeto pelo ID
  try {
    const id = req.params.id
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.post('/users', async (req, res) => {
  // Minha requisição vai ser passado como json
  // Apos captura-la vou repassar para o banco
  try {
    const user = await UserModel.create(req.body)

    res.status(201).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.delete('/users/:id', async (req, res) => {
  // Deletando objeto pelo ID
  try {
    const id = req.params.id
    const user = await UserModel.findByIdAndRemove(id, req.body)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})
const port = 8080
app.listen(port, () => console.log('listening on port 8080'))
