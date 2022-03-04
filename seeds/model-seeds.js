const { Models } =require('../models');

const modelData = [
    {
        modelName: 'ILX',
        brandId: 1,
    },
    {
        modelName: 'MDX',
        brandId: 1,
    },
    {
        modelName: 'NSX',
        brandId: 1,
    },
    {
        modelName: 'Giulia',
        brandId: 2,
    },
    {
        modelName: 'Stelvio',
        brandId: 2,
    },
    {
        modelName: 'Vantage',
        brandId: 3,
    },
    {
        modelName: 'DB11',
        brandId: 3,
    },
    {
        modelName: 'DB9',
        brandId: 3,
    },
    {
        modelName: 'A5',
        brandId: 4,
    },
    {
        modelName: 'R8',
        brandId: 4,
    },
    {
        modelName: 'A7',
        brandId: 4,
    },
    {
        modelName: 'Mulsanne',
        brandId: 5,
    },
    {
        modelName: 'Flying Spur',
        brandId: 5,
    },
    {
        modelName: 'Bentayga',
        brandId: 5,
    },
];

const seedModels = () => Models.bulkCreate(modelData);

module.exports = seedModels;