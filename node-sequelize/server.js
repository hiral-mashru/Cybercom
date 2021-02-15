const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send({
        status: 1,
        message: 'Get method'
    })
})

app.post('/',(req,res)=>{
    res.send({
        status: 1,
        message: 'Post method'
    })
})

app.delete('/',(req,res)=>{
    res.send({
        status: 1,
        message: 'Delete method'
    })
})

app.put('/',(req,res)=>{
    res.send({
        status: 1,
        message: 'Put method'
    })
})

app.listen(8000)