const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentsRoutes = require('./commentsRoutes');
const blogsRoutes = require('./blogsRoutes');

router.use('/users', userRoutes);
router.use('/comments', commentsRoutes);
router.use('/blogs', blogsRoutes);

module.exports = router;
