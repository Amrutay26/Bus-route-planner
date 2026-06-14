const {getRoutes,addRoute}=require('../controllers/routecontroller');

const router=require('express').Router();
const authmiddleware=require('../middleware/auth');
const isAdmin=require('../middleware/admin');
router.get('/',getRoutes);

router.post('/',authmiddleware,isAdmin,addRoute);
module.exports= router;