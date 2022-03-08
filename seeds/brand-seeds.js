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
        brand_name: 'Aston-Martin DB9',
    },
    {
        brand_name: 'Aston-Martin DB11',
    },
    {
        brand_name: 'Bentley Bentayga',
    },
    {
        brand_name: 'Bentley Continental',
    },
    {
        brand_name: 'Bentley Flying Spur',
    },
    {
        brand_name: 'BMW X1',
    },
    {
        brand_name: 'BMW X5',
    },
    {
        brand_name: 'BMW 4 Series Converitble',
    },
    {
        brand_name: 'Cheverolet Blazer',
    },
    {
        brand_name: 'Cheverolet Equinox',
    },
    {
        brand_name: 'Cheverolet Tahoe',
    },
    {
        brand_name: 'Cheverolet Silverado',
    },
];

const seedBrands = () => Brands.bulkCreate(brandData);

module.exports = seedBrands;