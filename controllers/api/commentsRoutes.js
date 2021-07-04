const router = require('express').Router();
const { Comments } = require('../../models');

//root/api/comments/:id
router.post('/:id', async (req, res) => {

  const BlogId = req.params.id;

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  dateCommented = dd + '/' + mm + '/' + yyyy;

  console.log(`--------dateCommented = ${dateCommented}------`)
  console.log(`--------req.body.commentDescription = ${req.body.commentBlog}------`)
  console.log(`--------BlogId = ${BlogId}------`)
  console.log(`--------BlogId = ${typeof BlogId}------`)
  console.log(`--------req.session.user_id = ${req.session.user_id}------`)
  console.log(`--------req.session.user_id = ${typeof req.session.user_id}------`)

  try {
    await Comments.create({
      commentDate: dateCommented,
      commentDescription: req.body.commentBlog,
      blog_id: parseInt(BlogId),
      user_id: req.session.user_id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
