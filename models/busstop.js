const mongoose=require("mongoose");

const busstopschema=new mongoose.Schema({
    stopname:{
        type: String,
    required :[true,"Stop name is required"],
    maxlength:[20]
},
   stopid :{
    type: Number,
    required :[true,"Id is required"],
    unique: true
   },
   latittude :{
    type: Number,
    required :[true,"Latitude is required"]
   },
   longitude: {
    type:Number ,
    required :[true, " Longitude is reuired"]
   }

});

module.exports=mongoose.model('BusStop',busstopschema);