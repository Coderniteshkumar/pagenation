import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import route from "./route.js"

const app=express()
app.use(bodyParser.json())
const PORT=5000
mongoose.connect("mongodb://localhost:27017/pagenation")
.then(()=>{
    console.log("database connect")
})
.catch(error=>console.log(error))

app.listen(PORT,()=>{
    console.log(`server run on port :${PORT}`)

})

app.use("/api",route)