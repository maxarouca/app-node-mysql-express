const indexModel = require('../models/indexModel')
const pessoasController =  async(req, res)=> {
	const pessoas = await indexModel.models.pessoa.findAll()
	res.render(pessoas)
}

module.exports = pessoasController