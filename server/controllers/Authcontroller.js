const usermodel=require('../models/User');

const signup=async(req,res)=>{
    const {name,email,password}=req.body;
    const usermail=await usermodel.findOne({email});
    if(usermail){
      return  res.json({
        success:false,
        message:"User already exists"
      });
    }
    
    const user=await usermodel.create({
        name,
        email,
        password
    });
    console.log(user);

      return res.json({
        success: true,
        message: "User created successfully",
        user
    });

}
const login=async(req,res)=>{
const {email,password}= req.body;
const usermail=await usermodel.findOne({email});
if(!usermail){
   return res.status(403).json({
    success:false,
    message:"User not exist"
   })
}
if(usermail.password===password) {
    return res.json({
        success:true,
        message:"Login successful"
    });
}
}