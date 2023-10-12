const express = require('express')
const users = require('./users.json')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Welcome To User Management System')
})
app.get('/users', (req, res) => {
  res.send(users)
})
app.post('/users', (req, res) => {
  console.log("post api hitting")
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
})

app.listen(port, () => {
  console.log(`Users Server listening on port ${port}`)
})