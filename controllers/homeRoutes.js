const router = require('express').Router();
const { User, Blog, Comments } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: { model: User },
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));


    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/myBlogs', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      where: { user_id: req.session.user_id },
      include: { model: User },
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));


    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blog/:id', withAuth, async (req, res) => {
  const blogID = req.params.id;
  var myBlog = false;
  try {
    const blogData2 = await Blog.findAll({
      where: { id: blogID },
      include: { model: User },
    });
    const blogs = blogData2.map((blog2) => blog2.get({ plain: true }));


    if (blogs[0].user_id == req.session.user_id) {
      myBlog = true;
    }

    const commentData = await Comments.findAll({
      where: { blog_id: blogID },
      include: { model: User },
    });
    const comments = commentData.map((comment) => comment.get({ plain: true }));

    res.render('blogPage', {
      blogs,
      comments,
      my_blog: myBlog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
