const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3001
const bodyParser = require('body-parser')

const indexModel = require('./models/indexModel')
const indexRoute = require('./routes/indexRoute')
const pessoasRoute = require('./routes/pessoasRoute')


app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', indexRoute)
app.use('/pessoas', pessoasRoute)

indexModel.sequelize.sync().then(() => {
	app.listen(port, ()=> console.log('CRUD-ORM listening'))
})
