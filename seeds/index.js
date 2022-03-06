const seedBrands = require('./brand-seeds');
const seedModels = require('./model-seeds');
const sequelize = require('../config/connection');
const seedPost = require('./posts-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedBrands();
  console.log('\n----- BRANDS SEEDED -----\n');

  // await seedModels();
  // console.log('\n----- MODELS SEEDED -----\n');

  await seedPost();
  console.log('\n----- POSTS SEEDED -----\n');



  process.exit(0);
};

seedAll();