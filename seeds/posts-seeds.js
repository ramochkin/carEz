const { Post } =require('../models');

const postsData = [
    {
        post_title: 'Alfa-Romeo review',
        content: 'review on Stelvio',

    },
    {
        post_title: 'Acura review',
        content: 'review on ILX',

    },
    {
        post_title: 'BMW review',
        content: 'review on ',

    },
    {
        post_title: 'Acura review',
        content: 'review on NSX',

    }
    
];

const seedPost = () => Post.bulkCreate(postsData);

module.exports = seedPost;