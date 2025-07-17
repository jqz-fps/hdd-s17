import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({ name: 'Juan' })
})

app.get('/user', (req, res) => {
  res.json({ name: 'Juan', age: 30 })
})

app.get('/dickens', (req, res) => {
  res.json({ name: 'Dickens', age: 30 })
})

app.listen(3000, () => {
  console.log('App listening on http://localhost:3000')
})