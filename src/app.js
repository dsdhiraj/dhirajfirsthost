const express = require('express');
const app = express();
const path  = require("path");
port = process.env.PORT || 8000;

// public static path

const static_path = (path.join(__dirname, "../public"));

app.use(express.static(static_path))

app.get("",(req,res)=>{
    res.send("Welcome to Dhiraj Learning");
});

app.get("/about",(req,res)=>{
    res.send("Welcome to Dhiraj Learning We Are In About");
});

app.get("/weather",(req,res)=>{
    res.send("Welcome to Dhiraj Learning We Are In Weather Page");
});

app.get("*",(req,res)=>{
    res.send("404 error oops");
});

app.listen(port,()=>{
    console.log(`listening the port at ${port}`);
});