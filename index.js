const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const axios = require('axios')

let app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(express.static(__dirname + '/client/dist/'))

app.get('/teamInfo', (req, res) => {
  let searchedTeam = req.query.team
  axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchedTeam}`)
    .then(response => {
      res.send(response.data.teams[0])
    })
    .catch(err => console.error(err))
})

app.listen(4000, () => {console.log('Listening to port 4000!')})