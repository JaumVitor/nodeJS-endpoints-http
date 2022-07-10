const dotenv = require('dotenv')
const connectToDataBase = require('./src/database/connect')

// Habilitando uso do arquivo .env
dotenv.config()
connectToDataBase()

require('./src/database/express')

// const { Person } = require('./modules/Person')
// const person = new Person('Alterando')
// Executando arquivo externo
// require('./modules/path.js')
// require('./modules/fs.js')
// require('./modules/http')
