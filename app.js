const express = require("express")
const app = express()

const server = app.listen(3333, () => {
  console.log("Node.js is listening to PORT:" + server.address().port)
})

app.get("/api/test", (req, res, next) => {
  res.json({
    id: 100,
    messages: 'test response zzzz'
  })
})