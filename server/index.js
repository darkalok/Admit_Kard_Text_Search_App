const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

// setup the server port
const port = process.env.PORT || 5000

// parse request data content type application/x-www-form-rulencoded
app.use(express.urlencoded({ extended: false }))

// parse request data content type application/json
app.use(express.json())

// define root route
app.get('/', (req, res) => {
  res.send('<h1>Server is up and Running :D</h1>')
})
// import question routes
const questionRoutes = require('./src/routes/questionBank.route')

// add question routes
app.use('/api/v1/textSearch', questionRoutes)

// listen to the port
app.listen(port, () => {
  console.log(`Express is running at port ${port}`)
})
