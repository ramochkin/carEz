const { Post } =require('../models');

const postsData = [
    {
        post_title: 'Cheverolet Blazer',
        content: 'This four door SUV is a front wheel drive car with a V6 engine with that get 19 MPG in cities and 27 MPG on the highway. Great car for young families.',

    },
    {
        post_title: 'Aston-Martin DB11 review',
        content: "The DB series are the only cars I drive, nothing else The DB11 is a diamond among that's be around forever",

    },
    {
        post_title: 'BMW BMW 4 Series Converitble',
        content: 'What an awesome convertible! Got the car about a year ago and have had no issues! Huge fan of the car!',

    },
    {
        post_title: 'Bentley Bentayga',
        content: 'Big fan of this SUV! it has all the luxury and performance of a Bentley while still giving me space and functionality. Awesome car for taking out on the PCH.',

    },
    {
        post_title: 'Acura MDX',
        content: "Car is way to small!!! I can barely fit in the driver's seat, stay away from this if your tall!",

    },

    {
        post_title: 'Cheverolet Silverado',
        content: 'Finally a car with some size! Great utility and comfort from the Silverado!',

    },
    
];

const seedPost = () => Post.bulkCreate(postsData);

module.exports = seedPost;