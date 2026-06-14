const mongoose=require('mongoose');

const edgeSchema=mongoose.Schema({
fromStop:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'BusStop',
    required:true
},
toStop:{
     type:mongoose.Schema.Types.ObjectId,
    ref:'BusStop',
    required:true
},
distance:{
type:Number,
required:true,
min:[0]
},
routeNumber: {
    type:String,
    required:true
},
time:{
    type:Number,
    required:true
}

});

module.exports=mongoose.model('Edge',edgeSchema);