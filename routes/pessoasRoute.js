
const express = require('express')
const router = express.Router()
const pessoasController = require('../controllers/pessoasController')
const indexModel = require('../models/indexModel')

router.get('/', pessoasController.pessoasController.bind(null, indexModel.models))
router.get('/create', pessoasController.createForm)
router.post('/create', pessoasController.createProcess.bind(null, indexModel.models))
router.get('/delete/:id', pessoasController.deleteOne.bind(null, indexModel.models))
router.get('/update/:id', pessoasController.updateForm.bind(null, indexModel.models))
router.post('/update/:id', pessoasController.updateProcess.bind(null, indexModel.models))


module.exports = router