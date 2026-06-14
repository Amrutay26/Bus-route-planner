require('dotenv').config({ path: '../.env' })
const mongoose=require('mongoose');
const edgemodel=require('../models/edge');
const {elements}=require('./edges.json');

const seededges=async(req,res)=>{
try{
await mongoose.connect(process.env.MONGO_URL);
console.log("Database connected");
 await edgemodel.deleteMany({});
   console.log("Cleared");
for(const element of elements){
 const fromStop = new mongoose.Types.ObjectId(element.from)
 const toStop=new mongoose.Types.ObjectId(element.to)
await edgemodel.create({
    fromStop:fromStop,
    toStop:toStop,
    distance:element.distance,
    routeNumber:element.routeNumber,
    time:element.time
})
   }
   console.log("Edeges seeded");
await mongoose.disconnect();
}
catch(err){
console.log(err);
}
}

seededges()