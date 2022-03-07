const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// create route for new post
router.post('/new', withAuth, async (req, res) => {
  // const content = {post_title,content};
  console.log('req.body',req.body)
  try {
    const newPost = await Post.create({ ...req.body, user_id: req.session.user_id });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update post
router.put('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
