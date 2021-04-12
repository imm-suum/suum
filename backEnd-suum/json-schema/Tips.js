const mongoose = require("mongoose");

const tipsSchema = mongoose.Schema({

  contentTitle: {
    type: String,
    required: true,
  },
  content:{
      type:String, 
      required:true
  }, 
  contentLink:{
      type:String, 
      required:true
  }

  
  
  

});



const Tips = mongoose.model('tips', tipsSchema);

module.exports = Tips ;