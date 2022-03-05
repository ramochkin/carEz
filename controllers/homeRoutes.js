const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  // try{
  //   const brandData=  await brands.findAll({
  //     include: [Model]
  //   })

  //   const brands =  brandData.map((brand)=> brand.get({plain: true}))

  //   res.render('homepage', {logged_in: req.session.logged_in, brands});
  // }catch(err){
  //   res.render('login')

  // }
  res.render('dashboard')
});

router.get('/login', (req,res) => {
  res.render('login')
});

router.get('/signup', (req,res) => {
  res.render('signup')
});


// switch(answer.getBrand){
//   case "Acura":
//     answer.getBrand = 1;
//     break;
//     case "Alfa-Romeo":
//     answer.getBrand = 2;
//     break;
//     case "Audi":
//     answer.getBrand = 3;
//     break;
//     case "Aston-Martin":
//     answer.getBrand = 4;
//     break;
//     case "Bentley":
//     answer.getBrand = 5;
//     break;
   
// }

module.exports = router;
