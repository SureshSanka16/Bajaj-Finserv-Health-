const express=require('express');
const routes=express.Router();
const {bfhlController}=require('../controller/bfhl.controller.js');

routes.post('/',bfhlController);

module.exports=routes;