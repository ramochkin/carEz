const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./posts-routes');
const commentRoutes = require('./comments-routes');


router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes)

module.exports = router;
