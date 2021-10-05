const express = require('express');
const app = express();



app.get('/cssFiles/todo.css', (res, req) => {
    req.sendFile(`${__dirname}/public/todo.css`)
})



app.use(express.static('public')) //middleware


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});