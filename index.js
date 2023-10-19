const express = require('express');

const app = express()
const port = 3333

// GET method
app.get('/', (req, res) => {
    res.json({ message: "Hallo ini respon JSON" });
})

// POST method  
app.post('/', (req, res) => {
    res.send('root')
})

// PUT method
app.put('/luwak', (req, res) => {
    res.send('luwak')
})

// DELETE method
app.delete('/luwakcoffee', (req, res) => {
    res.send('luwak')
})
