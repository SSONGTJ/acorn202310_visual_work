const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/greet', function (req, res) {
    res.send('Good Morning!')
  })


app.listen(3000, ()=>{
    console.log("server started!")
})