const express = require('express')
const cron = require("node-cron")

const controlid_service = require('./services/controlid_service')

const app = express()
const port = 3000

app.use(express.json()) 

//cron.schedule("*/5 * * * * *", () => controlid_service.run());

app.post('/api/notifications/catra_event', (req, res) => {
  console.log(req.body)
  res.send('ok!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})