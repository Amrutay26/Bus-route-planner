const router=require('express').Router();
const mongoose=require('mongoose');
const connectdb=require('../config/db');

const getstops=async()=>{
    await connectdb();

    const stops=await busstop.find();
    
    await mongoose.disconnect();

}