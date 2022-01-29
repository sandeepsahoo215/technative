const mongoose = require('mongoose');


const employeeSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
     LastName:{
         type:String,
         required:true
     },
     Email:{
         type:String,
        required:true,
        
         
    },
    Mobile:{
        type:Number,
         required:true

    },
    Gender:{
        type:String,
        required:true
    },
    Designation:{
        type:String,
        required:true
    },
    DateOfJoining:{
        type:Date,
        required:true
    },
    ReportingManager:{
        type:String,
        required:true
    },
    Salary:{
        type:Number,
        required:true
    },
    EmployeeCode:{
        type:Number,
        required:true
    },
    Location:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    Country:{
        type:String,
        required:true
    },
    Department:{
        type:String,
        required:true
    },
    DeletedAt:{
        type:Date,
        required:false
    },
    status:{
        type:String,
        required:true
    }

})


const myFirstDatabase = new mongoose.model('myFirstDatabase',employeeSchema);

module.exports = myFirstDatabase;