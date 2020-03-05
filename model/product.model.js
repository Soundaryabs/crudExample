//db section
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Schema is the builtin class next to mongoose

//declaring collection schema
//{datatype} , {collection}
let Product = new Schema({
    //schema design of each field
    title:{type:String},
    price:{type:Number},
    image:{type:String},
    info:{type:String},
    company:{type:String}
},
{
    //collection string
    collection:'products'
});

module.exports = mongoose.model('Product',Product);
//('modelname', accessing the variable)