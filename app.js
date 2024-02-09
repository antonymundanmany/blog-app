const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const blogRoute = require("./controllers/blogRouter")

//aliasname
const app = express()

//middleware

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://antony:andevipr@cluster0.apjpygl.mongodb.net/blogDB?retryWrites=true&w=majority",
{
        useNewUrlParser:true
}
)

//routing

app.use("/api/blog",blogRoute)

app.listen(3001,()=>{

        console.log("server is running")

})





