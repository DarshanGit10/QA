const express = require('express')
const app = express()
const port = 5000

const cors = require('cors')
app.use(cors())

const connectToMongo = require('./db')
connectToMongo();

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  // Middleware
app.use(express.json());

// Routes
app.use('/api', require('./routes/auth'))

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })
  