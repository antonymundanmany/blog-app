const express = require("express")
const blogModel = require("../models/blogModel")

const router = express.Router()

router.post("/add",async(req,res)=>{   //we have put async to work it in background
    let data = req.body  //value reading
    let blog = new blogModel(data)
    let result = await blog.save()
    
    res.json({

        "status":"success"

    })

})
router.get("/viewall",async(req,res)=>{
    let data = await blogModel.find()

    res.json(data)

})

module.exports = router




