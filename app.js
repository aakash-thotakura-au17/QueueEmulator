const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send('Welcome To Home Page')
})




app.listen(4651, () => console.log('server listening on port 4651'))