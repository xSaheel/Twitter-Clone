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
    const text = req.body.text;
    const likes = Number(req.body.likes);
    const date = req.body.date;

    const newTweet = new Tweet({
        id,
        author,
        text,
        likes,
        date
    });

    newTweet.save()
        .then(() => res.json('Tweet posted Successfully'))
        .catch(err => res.status(400).json(err));
})

module.exports = router;