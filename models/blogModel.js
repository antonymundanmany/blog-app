
const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema(

{
    name:String,
    age:String,
    mobilenumber:String,
    address:String,
    pincode:String,
    emailid:String,
    password:String
}

)
module.exports=mongoose.model("blogs",blogSchema)