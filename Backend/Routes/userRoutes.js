

const express=require("express");
const { Register, login, logged_out, getallusers } = require("../Controller/user");

const userrouter=express.Router();


userrouter.post("/register",Register);
userrouter.post("/login",login);
userrouter.get("/logout",logged_out)
userrouter.get("/getallusers",getallusers)


module.exports={
    userrouter
}

