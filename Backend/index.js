
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoute from "./route/user.route.js";
const app = express();


dotenv.config();

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;

// connect to mongodb

try{

  mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true

  });
  console.log("connected to mongodb");
}catch(error){
   console.log("Error:",error)
}
app.use(bodyParser.json());
app.use("/user",userRoute); 


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})