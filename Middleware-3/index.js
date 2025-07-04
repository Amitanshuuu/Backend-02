const express = require('express');
const app = express();

app.use(express.json());

app.post('/sum',(req,res)=>{
    const a = req.body.a;
    const b = req.body.b;
})

app.listen(3002,()=>{
    console.log("Server is running on port 3002");
})