
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

// Exercise 3. I Want THAT One!

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get('/collectibles/:index', (req, res) => {

    const idx = req.params.index;

    if (idx >= collectibles.length){
        res.send("This item is not yet in stock. Check back soon!")
    }else{
        res.send(`So, you want the ${collectibles[idx].name}? For ${collectibles[idx].price}, it can be yours!`)
    }

})


app.listen(3000,()=>{
    console.log('Listening on port 3000')
})


