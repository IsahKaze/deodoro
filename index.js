const express = require('express')

const app = express()
PORT = 5000

app.get('/', (req, res) => {
    res.send("oi, servidor ONLINE")
} )

app.listen(PORT, ()=> console.log('servidor rodando na porta: '+PORT))