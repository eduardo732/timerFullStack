'use strict'

const express = require('express');
const timeController=require('../controllers/timeController');
const router=express.Router();

router.post('/addTime', timeController.addTime);
router.get('/getTimes', timeController.getTimes);


module.exports=router;