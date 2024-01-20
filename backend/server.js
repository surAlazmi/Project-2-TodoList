const express= require('express')
const app= express()

const db=require('./db')
const Todo=require('./todo')
console.log(Todo);

app.get('/',(req,res)=>{
    res.json('Get/ is Working')
})

app.get('/tasks',(req,res)=>{
    res.json('Get/is workinf todo')
})



app.listen(5000,()=>{
    console.log('SERVER IS WORKING..');
})

