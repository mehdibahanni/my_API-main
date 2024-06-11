const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.sendFile('./views/index.htm', {root: __dirname} );
})

mongoose.connect("mongodb+srv://mehdibahanni2002:LghCDs75hfQPOrVB@cluster0.ihg4ce8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    app.listen(port, ()=>{
        console.log(`http://localhost:${port}/`);
    })
}).catch((error)=>{
    console.log(error)
})

// link for MyMongoDB mongodb+srv://mehdibahanni2002:LghCDs75hfQPOrVB@cluster0.ihg4ce8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// passworod : LghCDs75hfQPOrVB