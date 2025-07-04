const express = require("express");
const app = express();

app.use((req,res,next) => {
    console.log("HTTP Method:", req.method);
    console.log("URL:", req.url);
    console.log(new Date().toISOString());
    next();
})

app.get("/sum",(req,res)=>{
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const sum = a + b;
    res.json({a,b,sum})
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})