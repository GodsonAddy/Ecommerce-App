var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shopSchema = new Schema({
  title:{
    type: String,
    required: true
  },   
  author:{
    type: String,
    required: true
  },
  content:{
    type: String,
    required: true
  }  
}, {timestamps: true});

shopSchema.path('_id');
var shop = mongoose.model("shop", shopSchema);



shopSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

shopSchema.set("autoIndex", false);

exports.shopModel = shop;
