const express = require('express');
const app = express();
const PORT = process.env.PORT || 4651;
console.log(PORT)



app.get('/', (req, res) => {
    // res.send('Welcome To Home Page')
    res.sendFile(`${__dirname}/index.html`)
})

// console.log(`Welcome to ${__dirname}/index.html`)



app.listen(PORT, () => console.log(`server listening on port ${PORT}`))