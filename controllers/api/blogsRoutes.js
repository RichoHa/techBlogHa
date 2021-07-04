const router = require('express').Router();
const { Blog } = require('../../models');


//root/api/blogs
router.post('/', async (req, res) => {

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  var dateBlog = dd + '/' + mm + '/' + yyyy;

  try {
    await Blog.create({
      blogDate: dateBlog,
      blogTitle: req.body.titleBlog,
      blogDescription: req.body.commentBlog,
      user_id: req.session.user_id,
    });
    res.status(200).send('Blog added');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//root/api/blogs/:id
router.put('/:id', async (req, res) => {

  const BlogId = req.params.id;

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  var dateBlog = dd + '/' + mm + '/' + yyyy;

  try {
    await Blog.update({
      blogDate: dateBlog,
      blogTitle: req.body.editTitleBlog,
      blogDescription: req.body.editDesciptionBlog,
      user_id: req.session.user_id,
    }, {
      where: {
        id: BlogId,
      },
    });
    res.status(200).send('Blog updated');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  req.method = 'GET'
  res.redirect("/");
});


//root/api/blogs/:id
router.delete('/:id', async (req, res) => {

  const BlogId = req.params.id;

  try {
    await Blog.destroy({
      where: {
        id: BlogId,
      },
    });
    res.status(200).send('Blog Deleted');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
