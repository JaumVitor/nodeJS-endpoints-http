const mongoose = require('mongoose')

const connectToDataBase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.a2ouj.mongodb.net/?retryWrites=true&w=majority`,
    error => {
      if (error) {
        return console.log(
          `Erro ao tentar se conectar com o banco de bados: ${error}`
        )
      }
      return console.log('conexão com o banco de dados realizada com sucesso!')
    }
  )
}

module.exports = connectToDataBase
