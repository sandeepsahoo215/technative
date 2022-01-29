const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

require('./server/database/connection');


const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
  


app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use('/css',express.static(path.resolve(__dirname,"src/css")))
app.use('/img',express.static(path.resolve(__dirname,"src/img")))
app.use('/js',express.static(path.resolve(__dirname,"src/js")))






app.listen(3000,()=>{
    console.log(`Server is running on ${3000}`)
});


// load router

app.use('/', require('./server/router/router'))