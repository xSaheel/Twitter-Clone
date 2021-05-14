const router = require('express').Router();
let User = require('../models/userSchema');

router.route('/').get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(err));
});

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({
        name,
        email,
        password
    });

    newUser.save()
        .then(() => res.json(newUser))
        .catch(err => res.status(400).json(err));
})

module.exports = router;