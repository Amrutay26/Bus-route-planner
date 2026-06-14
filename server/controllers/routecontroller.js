

const routemodel=require('../models/route');


const getRoutes=async()=>{
 try{
const routes=await routemodel.find();
res.json(routes);
 }
 catch(err){
    res.status(500).json({message:err.message});
 }
}

const addRoute=async(req,res)=>{
    try{
const route=await Route.create(req.body);
res.status(201).json(route)
}
catch(err){
    res.status(500).json({message:err.message});
}
}

module.exports={getRoutes,addRoute}