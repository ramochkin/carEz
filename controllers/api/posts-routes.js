const { Posts } = require('../../models')
const router = require('express').Router()
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Posts.create({ ...req.body, user_id: req.session.user_id})

        res.json(newPost)

    } catch (err) {
        res.status(400).json(err);
    }
})
