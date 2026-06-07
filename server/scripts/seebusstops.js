require('dotenv').config({ path: '../.env' })
const mongoose=require('mongoose');
const BusStop=require('../models/busstop');
const connectdb=require('../config/db');

const {elements}=require('./stops.json');
const stops=async()=>{
    try{
   await  connectdb();

 for(const element of elements){

    const existingstop=await BusStop.findOne({
        stopname:element.tags.name
    });
    if(!existingstop){
 await BusStop.create({
stopName: element.tags.name,
stopId :element.id,
lat:element.lat,
lng:element.lon,

});
    }
}
console.log("stops seeded");
await mongoose.disconnect();
    }
    catch(err){
        console.log(err);
    }
}


 stops();


