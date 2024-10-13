require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.send("It's working!")
})

app.listen(PORT, () => {
    console.log(`Voeed server listening on port: ${PORT}`)
})