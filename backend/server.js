const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const eventRouter = require('./routes/eventRouter')

app.use(cors())
app.use(bodyParser.json())
app.use('/', eventRouter)

const PORT = 3001

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

module.exports = app