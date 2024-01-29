const router=require("express").Router()
const withAuth=require("../utils/auth")
//routes go here
router.get("/",withAuth,async(req,res)=>{
    try {
      res.render("homepage")  
    } catch (error) {
      res.status(500).json(error)  
    }
})
router.get("/signup",async (req,res)=>{
  try {
    res.render("signup")  
  } catch (error) {
    res.status(500).json(error)  
  }
})

module.exports=router