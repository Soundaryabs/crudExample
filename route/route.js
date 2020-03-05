const express = require('express');
const proControl =require('../controller/product.controller');
const proRoute = express.Router();

proRoute.route('/').get(proControl.home);
proRoute.route('/create').get(proControl.create);
proRoute.route('/edit/:id').get(proControl.edit);
proRoute.route('/create').post(proControl.addProduct);
proRoute.route('/update/:id').post(proControl.update);
proRoute.route('/delete/:id').get(proControl.delete);

module.exports =proRoute;
