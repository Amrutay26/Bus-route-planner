const jwt=require('jsonwebtoken');
require("dotenv").config();
const authMiddleware= async (req,res,next)=>{
try{
    const header= req.headers.authorization;

   if(!header){
    return res.status(401).json({
success:false,
message:"NO token"
    });
   }
   const token=header.split(" ")[1];

   const decoded= jwt.verify(
    token,
    process.env.JWT_SECRET
   );
   req.user=decoded;
   next();
}
catch(err){
res.status(401).json({
    message:"Authorization failed"
})
}
}
module.exports = authMiddleware