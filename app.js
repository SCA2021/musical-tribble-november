const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000; 

let myName = 'Sam';

app.get('/', (req, res) => {
  //res.send('Hello World This is a working node!')

  res.send(`<h3> Hi, ${myName}</h3>`);
})

app.get('/show',(req, res) => {

    res.sendFile('index.html', { root: __dirname });


})

console.log('in the node console');

app.listen(PORT, () => {
    console.log(`Server is running & listening on port: ${PORT}`);
  });