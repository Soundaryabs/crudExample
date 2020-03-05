const express = require('express');
const app=express();
//db connection object
const config = require('./config/Db');
//for handling post data from UI
const bodyParser = require('body-parser');
//db connectivity
const mongoose = require('mongoose');
//cross origin Resource sharing =>to avoid port block
const cors = require('cors');
//server port const
const PORT = 4400;

//view engine
app.set('view engine','pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//db connection
mongoose.Promise = global.Promise;
mongoose.connect(config.DB,{useNewUrlParser:true}).then(
    res =>{
        console.log('Database connected Successfully');
    },
    err =>{
        console.log(err);
    }
);

app.use(cors());

const proRoute = require('./route');
app.use('/',proRoute);

app.listen(PORT,()=>{
    console.log(`server is running in http://localhost:${PORT}`);
});