const Sequelize = require('sequelize')
const sequelize = new Sequelize('cadastro-orm2', 'root', '', {
	dialect: 'mysql',
	host: '127.0.0.1'
})

const pessoa = sequelize.import('./pessoaModel')

module.exports = {
	sequelize,
	models: {
		pessoa
	}
}