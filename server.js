const express = require("express");
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config()
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Welcome to database")
})

app.listen(port, ()=>{
    console.log(`server running on ${port}`);
})