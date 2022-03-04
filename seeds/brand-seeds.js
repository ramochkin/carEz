const { Brand } =require('../models');

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

const seedBrands = () => Brand.bulkCreate(brandData);

module.exports = seedBrands;