const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000; 

app.set('view engine', 'ejs');

let myName = 'Sam';

app.get('/', (req, res) => {
  //res.send('Hello World This is a working node!')

  res.send(`<h3> Hi, ${myName}</h3>`);
})

app.get('/show',(req, res) => {

    res.sendFile('index.html', { root: __dirname });


})
app.get("/", async (req,res) => {

  let result = await res.send("<h3> Hi, ${ myname} </h3>");



})

app.get('/name',(req, res) => {

  console.log("in get to slash name:", req.query.ejsFormName);


})


console.log("before app get on ejs", myName)
app.get('/ejs', (req,res) => {
    // use res.render to load up an ejs view file
    console.log("before res render on ejs", myName);
    res.render('index', {myName:myName});
    console.log("After res redner on /ejs", myName);
  
})

console.log('in the node console');

app.listen(PORT, () => {
    console.log(`Server is running & listening on port: ${PORT}`);
  });