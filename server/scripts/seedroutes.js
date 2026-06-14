require('dotenv').config({ path: '../.env' })
const mongoose=require('mongoose');

const routemodel=require('../models/route');
const {elements}=require('./routes.json');
const seedroutes= async()=>{
    try{
        console.log("MONGO_URL:", process.env.MONGO_URL)
     await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected");
   await routemodel.deleteMany({});
   console.log("Cleared");

   for(const element of elements){
    const stops = element.stops.map(id => new mongoose.Types.ObjectId(id))
    await routemodel.create({
        routeNumber:element.routeNumber,    
        stops:stops,
        fareperkm:element.fareperkm
    })
   }
   console.log("Routes seeded");
await mongoose.disconnect();

    }
    catch(err){
console.log(err);
    }
}

seedroutes();