const express = require("express");
const router = require("./src/routes/api");
const app = new express()


//Security middleware
const bodyParser = require('body-parser');
const rateLimit  = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require('xss-clean');
const  hpp = require('hpp');
const cors = require('cors');
const cookieParser = require("cookie-parser");

//Database connection
const mongoose = require('mongoose');
const URL ="mongodb+srv://riajul:riajul1234@cluster0.zjr1bbg.mongodb.net/Ecommerce"
mongoose.connect(URL)
.then(()=>{
    console.log("Mongodb connected!");
}).catch((e)=>{
    console.log(e)
})

//Security middleware Implement
app.use(cookieParser());
app.use(cors());
app.use(hpp());
app.use(xss());
app.use(mongoSanitize());
app.use(helmet());

app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({limit:"50mb"}))

//Body Parser
app.use(bodyParser.json())


//Rate Limiter
const limiter = rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

//Managing Backend API routing
app.use("/api/v1",router)

module.exports=app