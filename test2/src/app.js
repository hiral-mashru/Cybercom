const express = require('express')
const app = express()
// require('../index2')

var apiDoc = require('api-doc');
var options = {
    showNonPublic: true,
    cache: false
}

app.get('/apidoc/', apiDoc(app, options));

apiDoc -i 

app.get('/',(req,res)=>{
    res.send("I am hiral")
})

app.listen(8000,()=>{
    console.log("Listening...")
})