const express = require('express')

const app = express()

app.get(
  '/',
  (request, response) => {
    response.send('Welcome')
  }
)

const port = 3000

app.listen(
  port,
  () => console.log(`Listening on :${port}`)
)
