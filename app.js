const express = require('express');
const app = express();
const PORT = process.env.PORT || 4651;
console.log(PORT)



app.get('/', (req, res) => {
    res.send('Welcome To Home Page')
})




app.listen(PORT, () => console.log(`server listening on port ${PORT}`))