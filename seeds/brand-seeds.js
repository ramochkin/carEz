const { Brands } =require('../models');

const brandData = [
    {
        brandName: 'Acura',
    },
    {
        brandName: 'Alfa-Romeo',
    },
    {
        brandName: 'Aston-Martin',
    },
];

const seedBrands = () => Brands.bulkCreate(brandData);

module.exports = seedBrands;