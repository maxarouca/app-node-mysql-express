
const pessoasController =  async({ Pessoa }, req, res)=> {
	const pessoas = await Pessoa.findAll()
	res.render('pessoas/index', { pessoas })
}

const createForm = (req, res) => {
	res.render('pessoas/create')
}

const createProcess = async ({ Pessoa }, req, res) => {
	await Pessoa.create(req.body)
	res.redirect('/pessoas')
}

const deleteOne = async ({ Pessoa }, req, res) => {
	await Pessoa.destroy({
		where: {
			id: req.params.id
		}
	})
	res.redirect('/pessoas')
}

const updateForm = async ({ Pessoa }, req, res) => {
	const pessoa = await Pessoa.findById(req.params.id)
	res.render('pessoas/update', { pessoa })
}

const updateProcess = async ({ Pessoa }, req, res) => {
	await Pessoa.update(req.body, {
		where: {
			id: req.params.id
		}
	})
	res.redirect('/pessoas')
}





module.exports = {
	pessoasController, createProcess, createForm, deleteOne, updateForm, updateProcess
}