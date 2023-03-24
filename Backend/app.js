
const express=require("express");
const cors=require("cors");

const { ConnectDataBase } = require("./Models/db");
 
const cookieParser = require("cookie-parser");
const { userrouter } = require("./Routes/userRoutes");

const app=express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api",userrouter);

const PORT=3001;

ConnectDataBase().then(()=>{

    app.listen(PORT,()=>{

     console.log(`server is listening at ${PORT}`);
       
       })

})




