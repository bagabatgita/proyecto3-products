const express = require("express")

const { port } = require('../config')


const app = express()


const productRouter = require('./products/products.router')


const db = require('./utils/database')


const PORT= process.env.PORT || 5000

//? validar la conexion
db.authenticate()
    .then(()=> console.log('Database Authenticated!!'))
    .catch(err =>console.log(err))

db.sync()
.then(()=> console.log('Database Synced!!'))
.catch(err =>console.log(err))


app.use(express.json())


app.get('/', (req, res) => {
    res.json({
        message: 'Server OK',
        mymessage: process.env.MESSAGE
        
    })
}) 

app.use('/', productRouter)




app.listen(port, () => {
    console.log(`Server started at port ${PORT}`)
})