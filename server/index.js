import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./Routes/posts.js"

const app = express();

app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb" , extended:true}));
app.use(cors())

app.use("/post", postRoutes)


// connecting mongoDb
const CONNECTION_URL = "mongodb+srv://Memories:memoriesDb@cluster0.w1mqy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> app.listen(PORT, console.log(`server connected on port: ${PORT}`)))
    .catch((error)=> console.log(error.message));

// mongoose.set("useFindAndModify",false)    

