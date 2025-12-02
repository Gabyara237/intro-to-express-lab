
const express = require('express');

const app = express();

// Exercise 1. Be Polite, Greet the User 
app.get('/greetings/:username', (req,res)=>{
    res.send(`<h1>Hello there, ${req.params.username}! </h1>`)
})

app.listen(3000,()=>{
    console.log('Listening on port 3000')
})
