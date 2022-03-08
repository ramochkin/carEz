const router = require('express').Router();
const {Post, Comment, User, Brands} = require('../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('main-content', { posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res)=>{
  try{
    const postData= await Post.findByPk(req.params.id, {
      include: [User, {
        model: Comment,
        include: [User]
      }]
    });

    const post =  postData.get({plain: true});
    res.render('single-post', {
      post,
      logged_in: req.session.logged_in
    })


  }catch(err){
    res.status(500).json(err)
  }
})

// get login
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});
// get signup
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signUp');
});

module.exports = router;