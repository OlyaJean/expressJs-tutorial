const express = require('express');
const app = express();

//define middleware function

const myMiddleware = (req,res,next)=>{
    console.log('This first middelware will run on every request');
//next function runs widdleware every time
    next();
};

app.use(myMiddleware);

app.get('/',(req,res)=>{
    res.send('home page')
});

app.get('/about',(req,res)=>{
    res.send('about page')
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})