const router = require('express').Router();
const { Post, Brands } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    console.log('________________________')
    console.log(req.session);
    console.log(req.session.user_id);
    try {
      const postData = await Post.findAll({
        where: {
          user_id: req.session.user_id,
        },
      });
      console.log(postData);
  
      const posts = postData.map((post) => post.get({ plain: true }));
  
      res.render('dashboard-content', {
        layout: 'dashboard',
        posts,
      });
    } catch (err) {
    console.log('IN catch statment')
    console.log(err)
      res.redirect('login');
    }
  });
  // get new posts, login protected
  router.get('/new', withAuth, (req, res) => {
    res.render('new-post', {
      layout: 'dashboard',
    });
  });


  router.get('/', withAuth, async (req, res) => {
    try {
      const brandsData = await Brands.findAll({
        include: [{
            model: Brands,
            attributes: ['id', 'brand_name']
      }]
    });
      const brands = brandsData.map((brand) => brand.get({ plain: true }));
  
      res.render('dashboard-content', {
        layout: 'dashboard',
        brands,
      });
    } catch (err) {
      res.redirect('login');
    }
  });

  // get id, login protected
  router.get('/edit/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id);
  
      if (postData) {
        const post = postData.get({ plain: true });
  
        res.render('edit-post', {
          layout: 'dashboard',
          post,
        });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.redirect('login');
    }
  });
  
  module.exports = router;
  