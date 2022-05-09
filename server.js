const express = require("express");
const port = process.env.PORT || 5000;
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to database");
});

//post data
app.post("/login", (req, res) => {
  const user = req.body;
  // DANGER : Do'nt check password here for serious application
  // use proper process for hashing and checking
  // After completing all authentication related verification, issu JWT Token
  // সব ভ্যালিড শেষ হওয়ার পর নিচের ডেমো  কোডের মতোই টকেন এক্সেস দিতে হবে। মনের করি আগে সব ইনফো ভেরিফিকেশএন করা হয়ছে /

  if (user.email === "abc@gmail.com" && user.pass === "123456") {
    const accessToken = jwt.sign(
      { email: user.email },
      process.env.SECRET_TOKEN,
      { expiresIn: "1h" }
    );
    res.send({ sent: "success true", accessToken: accessToken });
  } else {
    res.send({ sent: "false" });
  }
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
