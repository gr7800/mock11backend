require("dotenv").config();
const express= require("express");
const cors= require("cors");
const connect = require("./config/db");


const PORT= process.env.PORT;
 const user= require("../src/routes/user.route");



const app= express();
app.use(express.json());
app.use(cors());
 app.use("/user",user)




app.listen(PORT,async()=>{
    await connect();
    console.log(`listening at http://localhost:${PORT}`)
})
