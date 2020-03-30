const express = require("express")
const jwt = require('jsonwebtoken')
const getToken = require('./token')

const app = express()
const server = app.listen(3333, () => {
  console.log("Node.js is listening to PORT:" + server.address().port)
})

const secretKey = 'kkofjow78310ifjl'

app.get('/api/sign', (req, res) => {
  const user = {
    id: 101,
    name: 'miyazaki'
  }

  const token = jwt.sign(user, secretKey, { expiresIn: '30s' })

  res.json({
    token
  })
})


app.get('/api/post', (req, res, next) => {
  const token = getToken(req)

  jwt.verify(token, secretKey, (err, decoded) => {
    if(err !== null){
      res.json({
        err,
        token
      })
    }
    res.json({
      result: 'post ok',
      user: decoded,
    })
  })

})
