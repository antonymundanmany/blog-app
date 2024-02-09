const express = require("express")
const blogModel = require("../models/blogModel")

const router = express.Router()
const bcrypt=require("bcryptjs")

hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/signup",async(req,res)=>{   //we have put async to work it in background
    let {data} = {"data":req.body}  //value reading
    let password=data.password
//     hashPasswordGenerator(password).then(
//         (hashedpa)
//     let blog = new blogModel(data)
//     let result = await blog.save()
    
//     res.json({

//         "status":"success"

//     })

// })
// consthas
// router.get("/viewall",async(req,res)=>{
//     let data = await blogModel.find()

//     res.json(data)

// })

const hashedpassword=await hashPasswordGenerator(password)
data.password=hashedpassword
let user=new blogModel(data)
        let result=await user.save()
        res.json({
            status:"success"
        })

    })







router.post("/signin",async(req,res)=>{
    let input=req.body
    let emailid=req.body.emailid
    let data=await blogModel.findOne("emailid":emailid)
    if(!data)
    {
        return res.json({
            status:"invalid user"
        })
    }
    console.log(data)
    let dbPassword=data.password
    let inputPassword=req.body.password
    console.log(dbPassword)
    console.log(inputPassword)
    const match=await bcrypt.compare(inputPassword,dbPassword)
    if(!match)
    {
        return res.json(
            {
                status:"invalid password"
            }
        )
    }
    res.json({
       status:"success" 
    })
})

module.exports = router


