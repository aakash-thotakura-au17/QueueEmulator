const express = require('express');
const app = express();
const PORT = process.env.PORT || 4651;


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

app.get('/style.css', (req, res) => {
    res.sendFile(`${__dirname}/public/style.css`)
})

app.get('/script.js', (req, res) => {
    res.sendFile(`${__dirname}/public/script.js`)
})





app.listen(PORT, () => console.log(`server listening on port ${PORT}`))