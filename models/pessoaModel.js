const PessoaModel = (sequelize, DataTypes) => {
	const Pessoa = sequelize.define('Pessoa', {
		nome: DataTypes.STRING,
		cargo: DataTypes.STRING,
		aniversario: DataTypes.DATE 
	})
	return Pessoa
}

module.exports = PessoaModel