require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;
app.get('/', (req, res)=>{res.send('response from server')});
app.get('/login', (req, res)=>{
    res.send('<h2>this is an attempt to login at cacb2</h2>');
});
app.get('/twitter', (req, res)=>{res.send('twitter response from server')});
app.listen(port, ()=>{
    //console.log(process.env);
    console.log(`app is listening on port ${port}`)
});