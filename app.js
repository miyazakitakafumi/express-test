const express = require("express")
const jwt = require('jsonwebtoken')
const tokenHelper = require('./token')

const app = express()
const server = app.listen(3333, () => {
  console.log("Node.js is listening to PORT:" + server.address().port)
})

const secretKey = 'kkofjow78310ifjl'

app.get('/api/sign', (req, res) => {
  const user = {
    id: 100,
    name: 'miyazaki'
  }

  const token = tokenHelper.createToken(user)

  res.json({
    token
  })
})


app.get('/api/post', (req, res, next) => {
  const auth = tokenHelper.verifyToken(req)

  if(auth.err !== null) {
    res.json({
      err: auth.err
    })
  } else {
    res.json({
      result: 'post ok',
      user: auth.user
    })
  }
})
