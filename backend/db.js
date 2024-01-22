const mongoose = require("mongoose")
const dbURI='mongodb://localhost:27017/TodoList01';



//أتصال مع المونجو
mongoose.connect(dbURI);

const db =mongoose.connection;



db.on("error",(err) =>{
    console.log('ERrrrROR iIS MongoDB):')
})

db.on("connected",(err) =>{
    console.log(' Mongjo DB Connected..');

});
