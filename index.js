const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000


const indexRoute = require('./routes/indexRoute')
const pessoasRoute = require('./routes/pessoasRoute')
const indexModel = require('./models/indexModel')


app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', indexRoute)
app.use('/pessoas', pessoasRoute)

indexModel.sequelize.sync().then(() => {
	app.listen(port, ()=> console.log('CRUD-ORM listening'))
})
