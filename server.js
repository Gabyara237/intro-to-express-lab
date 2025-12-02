
const express = require('express');

const app = express();

// Exercise 1. Be Polite, Greet the User 
app.get('/greetings/:username', (req,res)=>{
    res.send(`<h1>Hello there, ${req.params.username}! </h1>`)
})

// Exercise 2. Rolling the Dice

app.get('/roll/:number', (req,res)=>{

    const param = req.params.number;
    
    if (!isNaN(param)){
        res.send(`You rolled a ${Math.floor(Math.random(0,parseInt(param)) * parseInt(param)+1)}`)
    }else{
        res.send('You must specify a number.')
    }

})

app.listen(3000,()=>{
    console.log('Listening on port 3000')
})
