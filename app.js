const express = require('express')

const controlid_service = require('./services/controlid_service')

const app = express()
const port = 3000

app.use(express.json()) 

app.post('/api/notifications/dao', (req, res) => {

  // console.log('BODY')

  // console.log(req.body)

  // console.log('OBJECT_CHANGES')

  // console.log(req.body.object_changes)

  // console.log('VALUES')

  console.log(req.body.object_changes[0].values)
  
  res.send('Simulação')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
