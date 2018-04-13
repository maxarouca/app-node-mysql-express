
const express = require('express')
const router = express.Router()
const pessoasController = require('../controllers/pessoasController')

router.get('/', pessoasController)


module.exports = router