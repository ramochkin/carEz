const { Brands } =require('../models');

const brandData = [
    {
        brand_name: 'Acura',
    },
    {
        brand_name: 'Alfa-Romeo',
    },
    {
        brand_name: 'Aston-Martin',
    },
];

const seedBrands = () => Brands.bulkCreate(brandData);

module.exports = seedBrands;