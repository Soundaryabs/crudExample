let Product = require('../model/product.model');
const assert= require('assert');
module.exports={
    home: (req,res)=>{
        // res.render('index');
        Product.find(function(err,data){
            if(err){
                assert.equal(err,null);
            } else{
                res.render('index',{'products':data});
            }
        });
    },
    create:(req,res)=>{
        res.render('create');
    },
    addProduct:(req,res)=>{
        let data = new Product(req.body);
        data
            .save().then(result => {
                res.redirect('/');
                res.status(200).send('Product succesfully added into database ');
            })
            .catch(err => {
                res.status(400).send('Unable to save value into database');
            });
    },
    edit:(req,res)=>{
        let id =req.params.id;

        Product.findById({ _id:id},(err,data)=> {
            console.log(data);
            res.render('update',{'products':data});
        });
    },
    update:(req,res)=>{
        let id = req.params.id;
        Product.findById({ _id:id},(err,data)=>{
            if(!data){
                res.status(400).send('No data found');
            }
            else{
                data.title = req.body.title;
                data.price = req.body.price;
                data.image = req.body.image;
                data.info = req.body.info;
                data.company = req.body.company;

                data
                    .save().then(myData =>{
                        res.redirect('/');
                        res.status(200).json({message:'Data successfully updated'});
                    })
                    .catch(err =>{
                        res.status(400).send('Unable to update');
                    });
                }
            });
    },
    delete:(req,res) => {
        let id =req.params.id;
        Product.findByIdAndDelete({_id:id},(err,data) =>{
            if(err){
                assert.equal(null,err);
            }
            else
            {
                res.redirect('/');
                res.status(200).json({message:'Product Deleted'});
            }
        });
    }
};