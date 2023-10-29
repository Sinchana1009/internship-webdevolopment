const express = require('express')

const router = express.Router()
const{createStudent}=require('../controller/studentControl')

//router method
router.get('/',(req,res)=>{
    res.send("Router Method !!")
})
//route for create
router.post('/student',createStudent)//POST Method for Create

module.exports=router;