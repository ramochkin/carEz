const { Brands } =require('../models');

const brandData = [
    {
        brand_name: 'Acura ILX',
    },
    {
        brand_name: 'Acura MDX',
    },
    {
        brand_name: 'Acura NSX',
    },
    {
        brand_name: 'Alfa-Romeo Giulia',
    },
    {
        brand_name: 'Alfa-Romeo Stelvio',
    },
    {
        brand_name: 'Aston-Martin Vantage',
    },
    {
        brand_name: 'Aston-Martin DB11',
    },
    {
        brand_name: 'Aston-Martin DB11',
    },
];

const seedBrands = () => Brands.bulkCreate(brandData);

module.exports = seedBrands;