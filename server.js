
const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const bfhl=require('./routes/bfhl.routes')
const app=express();

//Middlewares
app.use(bodyparser.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello From Bajaj Finserv Health');
})
app.use('/bfhl',bfhl);


app.listen(3000,()=>{
    console.log("Server Started Welcome to Bajaj Finserv Health Project");
})
