// criando schema da minha entidade user
// "Como vai funcionar sua estrutura"
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  // Definindo a tipagem e setando o campo como obrigatório
  // A VALIDAÇÃO DO MEU REQUIRE NÃO ESTA FUNCIONANDO
  firtName: {
    type: String,
    require: true
  },

  lastName: {
    type: String,
    require: true
  },

  email: {
    type: String,
    require: true
  },

  password: {
    type: String,
    require: true,
    minlength: 7
  }
})

// Meu userModel vai ser usado para operações no banco
const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel
