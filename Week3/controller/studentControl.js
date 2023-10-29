const studentModel=require('../models/studentModel');

const createStudent=async function(req,res){
    try{
        let student=req.body;
        let{fname,lname,email,password,mobile,address}=student;


        if (!fname||!lname||!email||!password||!address||!mobile){
        return res.send({message:"Please provide all the information!"})
    }
    let createstu=await studentModel.create(student)
    return res.send({message:createstu})

    }catch(err){
        console.log(err)
    }
}

module.exports = {createStudent}