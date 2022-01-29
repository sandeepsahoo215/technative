const express = require("express");
const route = express.Router();

const controller = require('../controller/controller')


route.get('/',(req, res)=>{
    res.render('index');
});

route.get('/add-employee',(req,res)=>{
    res.render('addemployee');
});


route.get('/update-employee',(req,res)=>{
    res.render('update_employee');
})


route.post('/api/employee',controller.create);
route.get('/api/employee',controller.find);
route.put('/api/employee',controller.update);
route.delete ('/api/employee',controller.delete);

module.exports = route