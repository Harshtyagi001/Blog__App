const mongoose= require('mongoose');
const router = require('../routes/auth');

const CategorySchema=new mongoose.Schema({
 name:{
  type:String,
  required:true,
 },
}, {timestamps:true});


module.exports = mongoose.model("Category" , CategorySchema);

