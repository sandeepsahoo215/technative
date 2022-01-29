const mongoose = require('mongoose');


//const mongoose = require("mongoose");

const port = process.env.PORT || 3000;

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect("mongodb+srv://admin:admin123@cluster0.g7axf.mongodb.net/form?retryWrites=true&w=majority", {
    
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log("connection is connected successfully");
}).catch((e)=>{
    console.log(e)
})



 module.exports = connectionParams