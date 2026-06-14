const router=require('express').Router();

const getstops=require('../controllers/stopcontroller');

router.get('/',getstops);  

module.exports=router;