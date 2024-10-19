const express=require('express')
const MongoClient=require('mongoose')
const dotEnv=require('dotenv')
const employeeRoute=require('./route/EmployeeRoutes');
const bodyParser = require('body-parser');
const app=express();

app.use(bodyParser.json());

dotEnv.config();

const PORT=process.env.PORT||6655;

MongoClient.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB atlas connected successfully")
})
.catch((err)=>{
    console.log(err);
})

app.use("/employees",employeeRoute);

app.listen(PORT,()=>{
 console.log(`My Project working on ${PORT} number`)
})