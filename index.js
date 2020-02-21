const express = require('express')
const axios = require('axios')

const app = express()

const render = (data) => `<html>
  <head>
    <title>Star Wars server</title>
  </head>
  <body>
    <h1>${data.name} is a Star Wars character!</h1>
  </body>
</html>`

app.get(
  '/:characterId',
  async (req, res) => { // handler callback
    try {
      const id = req.params.characterId

      const url = `https://swapi.co/api/people/${id}/`

      console.log('url test:', url)

      const response = await axios.get(url)

      const page = render(response.data)

      res.send(page)
    } catch (error) {
      console.log(error)
    }
  }
)

const port = 3000

app.listen(
  port,
  () => console.log(`Listening on :${port}`)
)
