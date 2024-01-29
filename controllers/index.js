const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

<<<<<<< HEAD
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
=======
const homeRoutes = require('./api/homeRoutes.js');
router.use("/",homeRoutes)
router.use("/api",apiRoutes)

const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const productRoutes = require('./productRoutes');

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);


module.exports=router
>>>>>>> 54b5351c0357601abd772c50c2c8b78901b59c94
