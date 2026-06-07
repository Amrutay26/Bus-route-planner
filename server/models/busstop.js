const mongoose=require("mongoose");

const busstopschema=new mongoose.Schema({
    stopName:{
        type: String,
    required :[true,"Stop name is required"],
    maxlength:[20]
},
   stopId :{
    type: Number,
    required :[true,"Id is required"],
    unique: true
   },
   lat :{
    type: Number,
    required :[true,"Latitude is required"]
   },
   lng: {
    type:Number ,
    required :[true, " Longitude is reuired"]
   }

});

module.exports=mongoose.model('BusStop',busstopschema);