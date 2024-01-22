const express= require('express')
const app= express()

const db=require('./db')
const Todo=require('./todo')
console.log(Todo);

app.get('/',(req,res)=>{
    res.json('Get/ is Working')
})




//نرجع البينات الداتا بmongoose يبغالة تعديل
app.get('/tasks',(req,res)=>{
    Todo.find({},(err,data)=>{
        if(err){
            console.log('ERROR : ',err)
        }
        else
        {
            res.json(data)
        }
    })

    
})








app.listen(5000,()=>{
    console.log('SERVER IS WORKING..');
})

