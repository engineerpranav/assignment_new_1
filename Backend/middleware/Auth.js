const jwt=require("jsonwebtoken");
const config = require("../Config/config");
const { User } = require("../models/user");
 

const Auth=async(req,res,next)=>{

try{
    // const {token}=req.cookies;
    const {token}=req.headers;
     

    if(!token)  
    {
        return res.status(401).send({
            message:"Please Login First"
        })
    }

    const decoded=jwt.verify(token,config.JWT_SECRET_KEY);

    req.user=await User.findById(decoded._id);

    next();
}catch(err){
    return res.status(500).send({
        message:err.message
    })
}

}

module.exports={
    
    Auth

};