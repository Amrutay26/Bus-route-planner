const mongoose=require("mongoose");

const routeschema= new mongoose.Schema({
routeNumber:{
type: String,
required:[true],
unique:true
},
stops :[{
type:mongoose.Schema.Types.ObjectId,
required:true,
ref:"busstop"
}],
fareperkm:{
    type:Number,
    required:true
}
});

module.exports=mongoose.model('Route',routeschema);