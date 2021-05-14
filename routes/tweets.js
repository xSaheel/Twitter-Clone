const router = require('express').Router();
let Tweet = require('../models/tweetSchema');

router.route('/').get((req,res) => {
    Tweet.find()
        .then(tweets => res.json(tweets))
        .catch(err => res.status(400).json(err));
});

router.route('/add').post((req,res) => {
    const id = Number(req.body.id);
    const author = req.body.author;
    const email = req.body.email;
    const text = req.body.text;
    const likes = Number(req.body.likes);
    const date = req.body.date;

    const newTweet = new Tweet({
        id,
        author,
        email,
        text,
        likes,
        date
    });

    newTweet.save()
        .then(() => res.json(newTweet))
        .catch(err => res.status(400).json(err));
})

router.route('/addlike/:id').post((req,res) => {

    Tweet.findById(req.params.id)
        .then(tweet => { tweet.likes = tweet.likes + 1 })

    Tweet.save()
        .then(() => res.json('Post Liked!'))
        .catch(err => res.status(400).json(err));
})

module.exports = router;