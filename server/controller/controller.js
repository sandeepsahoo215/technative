const e = require('express');
const myFirstDatabase = require('../model/model');


exports.create =(req, res)=>{
    if(!req.body){
        res.status(400).send({message:"can;t be empty"});
        return;
    }

    const employee = new employee({
         FirstName:req.body.FirstName,
         LastName:req.body.LastName,
         Email:req.body.Email,
         Mobile:req.body.Email,
         status:req.body.status
    })


    employee
        .save(employee)
        .then(data=>{
            res.send(data)
        })
        .catch(e=>{
            res.status(500).send({
                message:err.message || "some error "
            })
        })
}

exports.find = (req, res)=>{

}


exports.update=(req,res)=>{

}

exports.delete=(req,res)=>{

}